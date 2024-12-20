[**CLI Documentation v0.0.0**](../../README.md)

***

[CLI Documentation](../../modules.md) / [utils](../README.md) / buildApp

# Function: buildApp()

> **buildApp**(`blueptint`, `middleware`, `onComplete`): `Promise`\<`void`\>

Builds an application pipeline using the provided blueprint and middleware.

## Parameters

### blueptint

`IBlueprint`

The blueprint object to be processed through the pipeline.

### middleware

`Pipe`[]

An array of middleware functions to process the blueprint.

### onComplete

`NextPipe`\<`IBlueprint`\>

A callback function to be executed once the pipeline processing is complete.

## Returns

`Promise`\<`void`\>

The resulting pipeline after processing the blueprint through the middleware.

## Defined in

[src/utils.ts:230](https://github.com/stonemjs/cli/blob/7903e21087d732d9d42947a348eb3c473963e042/src/utils.ts#L230)
