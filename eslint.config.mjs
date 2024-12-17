// SPDX-FileCopyrightText: 2024 Ali Sajid Imami
//
// SPDX-License-Identifier: MIT

import jestPlugin from 'eslint-plugin-jest'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    {
        ignores: ['**/dist/**', '**/lib/**', 'docs/**']
    },
    tseslint.configs.strict,
    tseslint.configs.stylistic,

    {
        files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
        ...tseslint.configs.disableTypeChecked
    },
    {
        // enable jest rules on test files
        files: ['__test__/**'],
        ...jestPlugin.configs['flat/recommended']
    }
)
