module.exports = {
  printWidth: 120,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'avoid',
  overrides: [
    {
      files: ['*.ejs', '*.html'],
      options: {
        trailingComma: 'none',
      },
    },
  ],
};