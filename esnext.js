'use strict';
const path = require('path');

module.exports = {
	extends: path.join(__dirname, 'index.js'),
	parser: 'babel-eslint',
	plugins: ['babel'],
	rules: {
		'indent': ['error', 2, {SwitchCase: 1}],

		'no-var': 'error',
		'prefer-arrow-callback': 'error',
		'prefer-const': ['error', {
			destructuring: 'all'
		}],

		// disabled since latest Node.js LTS doesn't yet support it
		// 'prefer-reflect': ['error', {exceptions: ['delete']}],

		// 'prefer-rest-params': 'error',

		// disabled because of https://github.com/eslint/eslint/issues/6572
		// 'prefer-template': 'error',

		// 'prefer-spread': 'error',

		// disable builtin rules that are incompatible with Babel plugin ones
		'generator-star-spacing': 'off',
		'new-cap': 'off',
		'array-bracket-spacing': 'off',
		'object-curly-spacing': 'off',
		'object-shorthand': 'off',
		'arrow-parens': 'off',

		'babel/generator-star-spacing': ['error', 'both'],
		'babel/new-cap': ['error', {
			newIsCap: true,
			capIsNew: true
		}],
		'babel/array-bracket-spacing': ['error', 'never'],
		'babel/object-curly-spacing': ['error', 'never'],
		'babel/object-shorthand': ['error', 'always'],
		'babel/arrow-parens': ['error', 'as-needed'],
		'babel/no-await-in-loop': 'error'
	}
};
