[**CLI Documentation v0.0.0**](../../README.md)

***

[CLI Documentation](../../modules.md) / [utils](../README.md) / makeBootstrapFile

# Function: makeBootstrapFile()

> **makeBootstrapFile**(`blueprint`, `action`, `isConsole`, `force`): `boolean`

Make App bootstrap module from stub.
In .stone directory for build action.
And at the root of the project for export action.

## Parameters

### blueprint

`IBlueprint`

The blueprint object.

### action

Action can be: `build` or `export`.

`"build"` | `"export"`

### isConsole

`boolean` = `false`

Build for console.

### force

`boolean` = `false`

Force file override if exists.

## Returns

`boolean`

Whether the bootstrap file was successfully created.

## Defined in

[src/utils.ts:307](https://github.com/stonemjs/cli/blob/7903e21087d732d9d42947a348eb3c473963e042/src/utils.ts#L307)
