module.exports = function DevServerConfig({ publicPath = '/', apiPath = '/' } = {}) { // eslint-disable-line no-unused-vars'
	return {
		historyApiFallback: { index: publicPath },
		publicPath,
		compress: true,
		hot: true,
		port: 3000,
	};
};

