module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        semi: false,
        singleQuote: true,
        printWidth: 120,
        tabWidth: 4
      }
    ]
  },
}
