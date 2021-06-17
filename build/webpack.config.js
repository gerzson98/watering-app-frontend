const { resolve } = require('path');
const { DefinePlugin } = require('webpack');
const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const baseConfig = require('./webpack.base.config');
const DevServerConfig = require('./dev-server.config');
const { config } = require('../package');

const isDevMode = process.env.NODE_ENV === 'development';

const toFullPath = isDevMode ? prependWith(process.env.DEV_HOST) : prependWith('');
const apiPath = toFullPath(process.env.API_PATH || config.default_api_path);
const publicPath = toFullPath(process.env.PUBLIC_PATH || config.default_public_path);

module.exports = merge(baseConfig, {
	entry: {
		app: './src/main.js',
	},
	output: {
		path: resolve(__dirname, '../dist'),
		publicPath,
		filename: 'assets/[name]-[contenthash].js',
		clean: true,
	},
	target: 'web',
	optimization: {
		runtimeChunk: 'single',
		splitChunks: { chunks: 'all' },
	},
	plugins: [
		new DefinePlugin({
			'process.env.API_PATH': JSON.stringify(apiPath),
			'process.env.PUBLIC_PATH': JSON.stringify(publicPath),

			/** Feature flags for Vue */
			'__VUE_OPTIONS_API__': JSON.stringify(true),
			'__VUE_PROD_DEVTOOLS__': JSON.stringify(false),

			/** Feature flags for Vue I18n */
			'__VUE_I18N_FULL_INSTALL__': JSON.stringify(true),
			'__VUE_I18N_LEGACY_API__': JSON.stringify(true),
			'__INTLIFY_PROD_DEVTOOLS__': JSON.stringify(false),
		}),
		...conditionally(process.env.ANALYZE, new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			generateStatsFile: true,
		})),
	],
	performance: {
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
	mode: isDevMode ? 'development' : 'production',
	devServer: DevServerConfig({ publicPath, apiPath }),
});

function conditionally(condition, value) {
	return condition ? [].concat(value) : [];
}

function prependWith(prefix = '') {
	return value => prefix.concat(value);
}
