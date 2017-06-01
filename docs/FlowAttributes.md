# PMIO.FlowAttributes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**processId** | **String** |  | 
**fromObjectId** | **String** |  | 
**fromObjectType** | **String** |  | 
**toObjectId** | **String** |  | 
**toObjectType** | **String** |  | 
**type** | **String** |  | [default to &#39;SEQUENTIAL&#39;]
**condition** | **String** |  | [optional] 
**_default** | **Boolean** |  | [default to false]
**optional** | **Boolean** |  | [default to false]
**createdAt** | **String** |  | [optional] 
**updatedAt** | **String** |  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `SEQUENTIAL` (value: `"SEQUENTIAL"`)

* `EVALUATE` (value: `"EVALUATE"`)

* `SELECT` (value: `"SELECT"`)

* `PARALLEL` (value: `"PARALLEL"`)

* `PARALLEL-BY-EVALUATION` (value: `"PARALLEL-BY-EVALUATION"`)

* `SEC-JOIN` (value: `"SEC-JOIN"`)

* `DISCRIMINATOR` (value: `"DISCRIMINATOR"`)




