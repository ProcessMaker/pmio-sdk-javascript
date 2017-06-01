# PMIO.ProcessAttributes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | 
**description** | **String** |  | [optional] 
**parentProcessId** | **String** |  | [optional] 
**status** | **String** |  | [default to &#39;ACTIVE&#39;]
**durationBy** | **String** |  | [default to &#39;WORKING_DAYS&#39;]
**type** | **String** |  | [default to &#39;NORMAL&#39;]
**assignment** | **Boolean** |  | [optional] [default to false]
**designAccess** | **String** |  | [default to &#39;PUBLIC&#39;]
**showMap** | **Boolean** |  | [optional] [default to true]
**showMessage** | **Boolean** |  | [optional] [default to true]
**showDelegate** | **Boolean** |  | [optional] [default to true]
**showDynaform** | **Boolean** |  | [optional] [default to false]
**categoryId** | **String** |  | [optional] 
**subCategoryId** | **String** |  | [optional] 
**createUserId** | **String** |  | [optional] 
**debug** | **Boolean** |  | [optional] [default to false]
**dynaformSummaryId** | **String** |  | [optional] 
**createdAt** | **String** |  | [optional] 
**updatedAt** | **String** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `INACTIVE` (value: `"INACTIVE"`)

* `DISABLED` (value: `"DISABLED"`)




<a name="DurationByEnum"></a>
## Enum: DurationByEnum


* `WORKING_DAYS` (value: `"WORKING_DAYS"`)

* `CALENDAR_DAYS` (value: `"CALENDAR_DAYS"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `NORMAL` (value: `"NORMAL"`)

* `SUB_PROCESS` (value: `"SUB_PROCESS"`)




<a name="DesignAccessEnum"></a>
## Enum: DesignAccessEnum


* `PUBLIC` (value: `"PUBLIC"`)

* `PRIVATE` (value: `"PRIVATE"`)




