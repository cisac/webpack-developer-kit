const fs = require("fs");
const path = require("path");

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8"));

module.exports = {
  parser: "babel-eslint",
  plugins: ["prettier", "react"],
  env: {
    jest: true,
    node: true,
    browser: true
  },
  rules: {
    "prettier/prettier": ["error", prettierOptions]
  }
};
