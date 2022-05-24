/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  rules: {
    "no-use-before-define": "error",
    complexity: ["error", 10],
    "consistent-return": "error",
    curly: "error",
    "dot-location": "error",
    eqeqeq: ["error", "smart"],
    "no-console": ["error", {
      allow: ["warn", "error"]
    }],
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-inline-comments": "error",
    "no-magic-numbers": "error",
    "no-multi-assign": "error",
    "no-multi-str": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": "error",
    "no-param-reassign": "error",
    "no-return-assign": "error",
    "no-return-await": "error",
    "no-useless-return": "error",
    "no-sequences": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-exponentiation-operator": "error",
    "prefer-object-spread": "error",
    "prefer-const": "error",
    "prefer-spread": "error",
    "require-await": "error",
    "sort-keys-fix/sort-keys-fix": "error",
    "arrow-spacing": "error",
    "block-spacing": "error",
    "comma-spacing": ["error", {
      before: false,
      after: true
    }],
    "comma-style": "error",
    indent: ["error", 2],
    "keyword-spacing": ["error", {
      before: true,
      after: true
    }],
    "padding-line-between-statements": ["error", {
      blankLine: "always",
      prev: "*",
      next: "return"
    }, {
      blankLine: "always",
      prev: "*",
      next: "export"
    }, {
      blankLine: "always",
      prev: "export",
      next: "*"
    }, {
      blankLine: "always",
      prev: "import",
      next: "*"
    }, {
      blankLine: "never",
      prev: "import",
      next: "import"
    }, {
      blankLine: "always",
      prev: "*",
      next: "if"
    }, {
      blankLine: "never",
      prev: "if",
      next: "if"
    }, {
      blankLine: "always",
      prev: "*",
      next: "default"
    }],
    "max-len": ["error", 120],
    "no-trailing-spaces": "error",
    "object-curly-spacing": ["error", "always"]
  },
  "ignorePatterns": ['*.js'],
  "extends": ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/eslint-config-typescript/recommended", "@vue/eslint-config-prettier", "plugin:storybook/recommended"],
  "env": {
    "vue/setup-compiler-macros": true
  },
  plugins: ["sort-keys-fix", "eslint-plugin-vue"]
};