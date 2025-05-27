/*
 * @FilePath: /prettier-config-win/index.cjs
 */
/**
 * @winner-fed/prettier-config-win
 * CommonJS 入口文件
 */

const config = {
  semi: true,
  useTabs: false,
  tabWidth: 2,
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'none',
  proseWrap: 'preserve',
  bracketSameLine: true,
  arrowParens: 'always',
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  vueIndentScriptAndStyle: true,
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  requirePragma: false,
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  overrides: [
    {
      files: ['*.less', '*.css'],
      options: {
        singleQuote: false
      }
    }
  ]
};

module.exports = config; 