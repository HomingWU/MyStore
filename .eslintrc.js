
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint', 'jsdoc', 'prefer-arrow'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:jsdoc/recommended',
      'plugin:prefer-arrow/recommended',
    ],
    rules: {
    },
  };
  