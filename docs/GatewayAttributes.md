# PMIO.GatewayAttributes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**processId** | **String** |  | 
**type** | **String** |  | 
**direction** | **String** |  | [optional] 
**refId** | **String** | Set as XML object ID if imported from BPMN file or can be optionally set when object added via API. Used to optionally refer object by ref_id instead of using its UUID. | [optional] 
**createdAt** | **String** |  | [optional] 
**updatedAt** | **String** |  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `EXCLUSIVE` (value: `"EXCLUSIVE"`)

* `INCLUSIVE` (value: `"INCLUSIVE"`)

* `PARALLEL` (value: `"PARALLEL"`)

* `EVENT` (value: `"EVENT"`)




<a name="DirectionEnum"></a>
## Enum: DirectionEnum


* `DIVERGENT` (value: `"DIVERGENT"`)

* `CONVERGENT` (value: `"CONVERGENT"`)

* `MIXED` (value: `"MIXED"`)




