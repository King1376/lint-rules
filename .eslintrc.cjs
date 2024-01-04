module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'prettier',
  ],
  overrides: [
    {
      files: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.json'],
    },
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
  ignorePatterns: ['node_modules/', 'dist/', 'pnpm-lock.yaml', '*.log'],
};
