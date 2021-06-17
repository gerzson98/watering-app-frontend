const esmOnlyDependencies = [
	'@lion/',
	'@open-wc/',
	'lit-element',
	'lit-html',
	'singleton-manager',
];

module.exports = {
	moduleFileExtensions: ['js', 'json', 'vue'],
	testURL: 'http://localhost/',
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.vue$': 'vue-jest',
	},
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/mocks/file-mock',
		'\\.(css|less|scss|sass)$': '<rootDir>/test/mocks/style-mock',
		'^src/(.*)$': '<rootDir>/src/$1',
		'^test/(.*)$': '<rootDir>/test/$1',
	},
	transformIgnorePatterns: [`/node_modules/(?!${esmOnlyDependencies.join('|')})`],
};
