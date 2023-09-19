module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    '@lnu',
    'standard-with-typescript',
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json'
  },
  rules: {
  },
  ignorePatterns: [
    './src/lib/typesConstantsAndEnums.ts',
    './jest.config.js'
  ]
}
