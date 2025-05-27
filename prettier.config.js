/*
 * @FilePath: /prettier-config-win/prettier.config.js
 */
/**
 * @winner-fed/prettier-config-win
 * 团队内部 prettier 配置
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

export default config; 