module.exports = {
	extends: ['airbnb-base'],
	parser: 'babel-eslint',
	rules: {
		'indent': ['error', 'tab', { SwitchCase: 1 }],
		'no-tabs': 0,
		'import/prefer-default-export': 0,
		'no-param-reassign': 0,
		'consistent-return': 0,
		'camelcase': 0,
		'prefer-const': 0,
		'no-underscore-dangle': 0,
		'no-console': 0
	}
}