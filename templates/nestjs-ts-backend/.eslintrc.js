const MAX_PARAMS = 7
const MAX_COMPLEXITY = 15

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import', 'sonarjs', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:rxjs/recommended',
    "plugin:sonarjs/recommended"
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': ['error'],
    '@typescript-eslint/no-explicit-any': 'off',
    'no-return-await': 'off',
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': ['warn', {
      'ignore': [-1, 0, 1],
      'ignoreArrayIndexes': true,
      'ignoreEnums': true,
      'ignoreReadonlyClassProperties': true,
      'ignoreNumericLiteralTypes': true
    }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { 'ignoreRestSiblings': true }],
    '@typescript-eslint/no-var-requires': 'error',
    'curly': 'error',
    'no-plusplus': ['warn', { 'allowForLoopAfterthoughts': true }],
    'max-classes-per-file': ['warn', 1],
    'no-param-reassign': 'warn',
    'no-nested-ternary': 'error',
    'max-params': ['warn', MAX_PARAMS],
    'max-lines': ["error", { 'max': 750, 'skipComments': true, 'skipBlankLines': false }],
    'eqeqeq': ["error", "always"],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': ['error', {
      noUselessIndex: true,
    }],
    'import/namespace': 'off',
    'import/order': [
      1,
      {
        groups: ['external', 'builtin', 'internal', 'index', 'parent', 'sibling'],
      },
    ],
    '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true }],
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-misused-promises': 'error',
    '@typescript-eslint/await-thenable': 'error',
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/unbound-method': 'error',
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': ['error', { allowAny: true }],
    '@typescript-eslint/naming-convention': ['error',
      { 'selector': 'class', 'format': ['PascalCase'] },
      { 'selector': 'parameter', 'format': ['camelCase'], 'leadingUnderscore': 'allow' },
      { 'selector': 'typeAlias', 'format': ['PascalCase'] },
      { 'selector': 'typeParameter', 'format': ['PascalCase'], 'prefix': ['T'] },
      { 'selector': 'interface', 'format': ['PascalCase'], 'custom': { 'regex': '^I[A-Z]', 'match': false } },
      { 'selector': ['enum', 'enumMember'], 'format': ['UPPER_CASE'] },
      { 'selector': 'function', 'format': ['camelCase', 'PascalCase'] },
      {
        'selector': 'variable',
        'types': ['boolean'],
        'format': ['PascalCase'],
        'prefix': ['is', 'should', 'has', 'can', 'did', 'will', 'with']
      },
      {
        'selector': 'variable',
        'types': ['string', 'number', 'array', 'function'],
        'format': ['camelCase', 'UPPER_CASE', 'PascalCase']
      }
    ],
    'prettier/prettier': ['error', { 'printWidth': 140, 'singleQuote': true, 'trailingComma': 'all', 'semi': false }],
    'no-console': 'error',
    "sonarjs/cognitive-complexity": ['off', MAX_COMPLEXITY],
    "sonarjs/no-duplicate-string": 'off',
  },

  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true
      },
    }
  }
};
