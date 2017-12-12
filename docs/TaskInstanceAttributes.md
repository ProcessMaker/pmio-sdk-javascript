# PMIO.TaskInstanceAttributes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskId** | **String** |  | 
**instanceId** | **String** |  | 
**groupId** | **String** |  | [optional] 
**userId** | **String** |  | [optional] 
**status** | **String** |  | [default to &#39;INITIAL&#39;]
**priority** | **String** |  | [default to &#39;3&#39;]
**delegateDate** | **String** |  | [optional] 
**startDate** | **String** |  | [optional] 
**finishDate** | **String** |  | [optional] 
**taskDueDate** | **String** |  | [optional] 
**riskDate** | **String** |  | [optional] 
**duration** | **Integer** |  | [optional] 
**instanceOverduePercentage** | **Number** |  | [optional] 
**data** | **String** |  | [optional] 
**dataModel** | **String** |  | [optional] 
**createdAt** | **String** |  | [optional] 
**updatedAt** | **String** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `INITIAL` (value: `"INITIAL"`)

* `DELEGATED` (value: `"DELEGATED"`)

* `STARTED` (value: `"STARTED"`)

* `CANCELLED` (value: `"CANCELLED"`)

* `FINISHED` (value: `"FINISHED"`)

* `COMPLETE` (value: `"COMPLETE"`)

* `PAUSED` (value: `"PAUSED"`)




<a name="PriorityEnum"></a>
## Enum: PriorityEnum


* `1` (value: `"1"`)

* `2` (value: `"2"`)

* `3` (value: `"3"`)

* `4` (value: `"4"`)

* `5` (value: `"5"`)




