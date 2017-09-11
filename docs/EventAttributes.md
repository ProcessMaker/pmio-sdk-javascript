# PMIO.EventAttributes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | 
**description** | **String** |  | [optional] 
**processId** | **String** |  | 
**messageId** | **Integer** |  | [optional] 
**type** | **String** |  | 
**definition** | **String** |  | 
**interrupting** | **Boolean** |  | [optional] 
**condition** | **String** |  | [optional] 
**time** | **String** |  | [optional] 
**duration** | **String** |  | [optional] 
**cycle** | **String** |  | [optional] 
**attachedToTaskId** | **String** |  | [optional] 
**createdAt** | **String** |  | [optional] 
**updatedAt** | **String** |  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `START` (value: `"START"`)

* `END` (value: `"END"`)

* `INTERMEDIATE_CATCH` (value: `"INTERMEDIATE_CATCH"`)

* `INTERMEDIATE_THROW` (value: `"INTERMEDIATE_THROW"`)

* `BOUNDARY` (value: `"BOUNDARY"`)

* `IMPLICIT_THROW` (value: `"IMPLICIT_THROW"`)




<a name="DefinitionEnum"></a>
## Enum: DefinitionEnum


* `NONE` (value: `"NONE"`)

* `CANCEL` (value: `"CANCEL"`)

* `COMPENSATION` (value: `"COMPENSATION"`)

* `ERROR` (value: `"ERROR"`)

* `ESCALATION` (value: `"ESCALATION"`)

* `MESSAGE` (value: `"MESSAGE"`)

* `LINK` (value: `"LINK"`)

* `SIGNAL` (value: `"SIGNAL"`)

* `TERMINATE` (value: `"TERMINATE"`)

* `TIMER` (value: `"TIMER"`)




