module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true
    },
    extends: ['airbnb', 'plugin:jest/recommended', 'jest-enzyme'],
    plugins: [
        'babel',
        'import',
        'jsx-a11y',
        'react',
        'prettier',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    "rules": {
      "indent": [1, "tab"], // Величина отступа 1 TAB
      "linebreak-style": ["error", "windows"], // правильный перевод строки для Windows 'CRLF', для unix 'LF'
      "no-console": "off", // разрешить консоль
      "no-unused-vars": [0], // отключить проверку неиспользуемых переменных
      "space-before-blocks": 1, // отступ перед блоками
      "keyword-spacing": ["warn", { "after": true }], // отступ после ключевых слов
      "space-infix-ops": "warn", // пробелы между знаком равно
      "key-spacing": ["warn", { "afterColon": true }] //
    }