export const parser = '@typescript-eslint/parser';
export const parserOptions = {
  project: 'tsconfig.json',
  tsconfigRootDir: __dirname,
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'prettier/prettier': 0,
  },
};