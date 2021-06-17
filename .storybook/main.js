module.exports = {
	stories: [
		'../src/**/*.stories.js',
		'./**/*.stories.js',
	],
	addons: [
		'@storybook/addon-essentials',
	],
	core: { builder: 'webpack5' },
};
