import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import vueParser from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ref: 'readonly',
        computed: 'readonly',
        useFetch: 'readonly',
        useState: 'readonly',
        useRouter: 'readonly',
        useRoute: 'readonly',
        useNuxtApp: 'readonly',
        useHead: 'readonly',
        useSeoMeta: 'readonly',
        useCookie: 'readonly',
        useRuntimeConfig: 'readonly',
        defineNuxtConfig: 'readonly',
        navigateTo: 'readonly',
      },
    },
  },
  {
    ignores: ['node_modules', 'dist', '.nuxt', '.output'],
  },
];
