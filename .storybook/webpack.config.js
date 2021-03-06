const { resolve } = require('path');

module.exports = async ({ config }) => {
	config.resolve.alias = {
		...config.resolve.alias,
		'src': resolve(__dirname, '../src'),
		'test': resolve(__dirname, '../test'),
	};

	const { use: cssLoaders } = findRuleMatching('any.css', config.module.rules);
	config.module.rules = [
		...config.module.rules,
		{ test: /\.(scss|sass)$/, use: [...cssLoaders, 'resolve-url-loader', 'sass-loader'] },
	];
	return config;
};

function findRuleMatching(name, rules) {
	return rules.find(({ test }) => test.test(name));
}
