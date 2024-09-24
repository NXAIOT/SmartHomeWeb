import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {files: ["**/*.vue"], languageOptions: {parserOptions: {parser: tseslint.parser}}},
  {
    rules: {
      'semi': ['warn', 'never'],
      'no-useless-call': 'warn',
      'default-case': 'warn',
      'indent': ['warn', 4],
      'max-statements': ['warn', 20],
      'max-statements-per-line': ['warn', { max: 1 }],
      "vue/html-indent": ["warn", 4, {
        "attribute": 1,
        "baseIndent": 1,
        "closeBracket": 0,
        "alignAttributesVertically": true,
        "ignores": []
      }],
      "quotes": ["error", "double"],
      "vue/multi-word-component-names": "off"
    }
  }
];