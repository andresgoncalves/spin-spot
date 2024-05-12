/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@spin-spot/eslint-config/api.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
