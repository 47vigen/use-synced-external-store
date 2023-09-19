// @ts-check

/** @type {import("eslint").Linter.Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'turbo',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:react/recommended'
  ],
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'sort-export-all',
    'unused-imports',
    'destructuring'
  ],
  rules: {
    'prefer-destructuring': 'error',
    'space-before-blocks': 'error',
    'arrow-spacing': 'error',
    'arrow-body-style': ['error', 'always'],
    curly: ['error', 'all'],
    'no-else-return': 'error',
    'no-multiple-empty-lines': 'error',
    'no-undef': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true
      }
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'object', 'index'],
        pathGroups: [
          {
            pattern: '*.scss',
            group: 'index',
            patternOptions: {
              matchBase: true,
              dot: true
            },
            position: 'after'
          },
          {
            pattern: '*.css',
            group: 'index',
            patternOptions: {
              matchBase: true,
              dot: true
            },
            position: 'after'
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['type', 'object'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/newline-after-import': [
      'error',
      {
        count: 1
      }
    ],
    'import/namespace': 'off',
    'import/named': 'off',
    'import/no-unresolved': 'off',
    'turbo/no-undeclared-env-vars': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react/no-array-index-key': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-key': 'error',
    'sort-export-all/sort-export-all': 'off',
    'simple-import-sort/exports': 'off',
    'import/extensions': ['error', {js: 'never', json: 'always', scss: 'always', css: 'always'}],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'destructuring/in-params': 'error',
    'destructuring/in-methods-params': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error'
  },
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/consistent-type-imports': 'off'
      }
    },
    {
      files: ['src/**'],
      rules: {
        'import/no-default-export': 'error',
        '@typescript-eslint/no-var-requires': 'error'
      }
    },
    {
      files: [
        'src/App.tsx',
        'src/pages/**/*.@(ts|tsx)',
        'src/**/Router/*.@(ts|tsx)',
        'src/**/*.dynamic.@(ts|tsx)'
      ],
      rules: {
        'import/no-default-export': 'off'
      }
    },
    {
      files: ['src/**/index.{ts,js}'],
      rules: {
        'sort-export-all/sort-export-all': 'error'
      }
    }
  ],
  globals: {
    t: true,
    JSX: true,
    React: true,
    NodeJS: true,
    ImportMetaEnv: true,
    IdleRequestOptions: true,
    IdleRequestCallback: true
  },
  env: {
    es6: true,
    jest: true,
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
    react: {
      version: 'detect'
    }
  }
};
