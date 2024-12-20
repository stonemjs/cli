[**CLI Documentation v0.0.0**](../../README.md)

***

[CLI Documentation](../../modules.md) / [stubs](../README.md) / rollupConfigStub

# Variable: rollupConfigStub

> `const` **rollupConfigStub**: "\nimport json from '@rollup/plugin-json';\nimport babel from '@rollup/plugin-babel';\nimport replace from '@rollup/plugin-replace';\nimport multi from '@rollup/plugin-multi-entry';\nimport commonjs from '@rollup/plugin-commonjs';\nimport \{ removeCliDecorators \} from '@stone-js/cli';\nimport nodeResolve from '@rollup/plugin-node-resolve';\nimport nodeExternals from 'rollup-plugin-node-externals';\n\nexport default (\{ input, output, externalsOptions = \{\}, replaceOptions = \{\} \}) =\> \{\n  return \{\n    input,\n    output,\n    plugins: \[\n      multi(),\n      nodeExternals(externalsOptions), // Must always be before \`nodeResolve()\`.\n      nodeResolve(\{\n        extensions: \['.js', '.mjs', '.ts'\],\n        exportConditions: \['node', 'import', 'require', 'default'\],\n      \}),\n      json(),\n      commonjs(),\n      removeCliDecorators(),\n      replace(replaceOptions),\n      babel(\{\n        babelrc: false,\n        configFile: false,\n        babelHelpers: 'bundled',\n        extensions: \['.js', '.mjs', '.ts'\],\n        presets: \[\n          '@babel/preset-env',\n          '@babel/preset-typescript',\n        \],\n        plugins: \[\n          \['@babel/plugin-proposal-decorators', \{ version: '2023-11' \}\],\n        \],\n      \}),\n    \],\n  \};\n\};\n"

Rollup config stub.

## Defined in

[src/stubs.ts:52](https://github.com/stonemjs/cli/blob/7903e21087d732d9d42947a348eb3c473963e042/src/stubs.ts#L52)
