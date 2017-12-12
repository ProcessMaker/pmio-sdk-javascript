# PMIO.ProcessAttributes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | 
**description** | **String** |  | [optional] 
**parentProcessId** | **String** |  | [optional] 
**status** | **String** |  | [default to &#39;ACTIVE&#39;]
**type** | **String** |  | [default to &#39;NORMAL&#39;]
**assignment** | **Boolean** |  | [optional] [default to false]
**categoryId** | **String** |  | [optional] 
**subCategoryId** | **String** |  | [optional] 
**createUserId** | **String** |  | [optional] 
**debug** | **Boolean** |  | [optional] [default to false]
**refId** | **String** | Set as XML object ID if imported from BPMN file or can be optionally set when object added via API. Used to optionally refer object by ref_id instead of using its UUID. | [optional] 
**createdAt** | **String** |  | [optional] 
**updatedAt** | **String** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `INACTIVE` (value: `"INACTIVE"`)

* `DISABLED` (value: `"DISABLED"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `NORMAL` (value: `"NORMAL"`)

* `SUB_PROCESS` (value: `"SUB_PROCESS"`)




