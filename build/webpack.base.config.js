const { resolve } = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');

const cssLoaders = [CssExtractPlugin.loader, 'css-loader', 'postcss-loader'];

module.exports = {
	resolve: {
		alias: {
			'src': resolve(__dirname, '../src'),
			'test': resolve(__dirname, '../test'),
		},
		extensions: ['*', '.js', '.vue', '.json'],
		mainFiles: ['index', 'index.vue'],
	},
	module: {
		rules: [
			{ test: /\.vue$/, loader: 'vue-loader' },
			{ test: /\.js$/, loader: 'babel-loader', include: projectPaths(['src', 'test']) },
			{ test: /\.css$/, use: cssLoaders },
			{ test: /\.(scss|sass)$/, use: [...cssLoaders, 'resolve-url-loader', 'sass-loader'] },
			{ test: /\.(otf|ttf|woff|woff2)$/, type: 'asset/resource', generator: { filename: 'assets/[name]-[contenthash][ext]' } },
		],
	},
	plugins: [
		new VueLoaderPlugin(),
		new CssExtractPlugin({ filename: 'assets/[name]-[contenthash].css' }),
		new HtmlWebpackPlugin({ template: 'src/index.html' }),
	],
	devtool: 'source-map',
};

function projectPaths(rootPaths) {
	const toAbsolute = rootRelative => resolve(__dirname, '../', rootRelative);
	return rootPaths.map(toAbsolute);
}
