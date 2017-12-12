# PMIO.TaskAttributes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | 
**description** | **String** |  | [optional] 
**processId** | **String** |  | 
**type** | **String** |  | [default to &#39;NORMAL&#39;]
**assignType** | **String** |  | [default to &#39;CYCLIC&#39;]
**lastAssignedUserId** | **String** |  | [optional] 
**script** | **String** |  | [optional] 
**refId** | **String** | Set as XML object ID if imported from BPMN file or can be optionally set when object added via API. Used to optionally refer object by ref_id instead of using its UUID. | [optional] 
**createdAt** | **String** |  | [optional] 
**updatedAt** | **String** |  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `NORMAL` (value: `"NORMAL"`)

* `ADHOC` (value: `"ADHOC"`)

* `SUBPROCESS` (value: `"SUBPROCESS"`)

* `HIDDEN` (value: `"HIDDEN"`)

* `GATEWAYTOGATEWAY` (value: `"GATEWAYTOGATEWAY"`)

* `WEBENTRYEVENT` (value: `"WEBENTRYEVENT"`)

* `END-MESSAGE-EVENT` (value: `"END-MESSAGE-EVENT"`)

* `START-MESSAGE-EVENT` (value: `"START-MESSAGE-EVENT"`)

* `INTERMEDIATE-THROW-MESSAGE-EVENT` (value: `"INTERMEDIATE-THROW-MESSAGE-EVENT"`)

* `INTERMEDIATE-CATCH-MESSAGE-EVENT` (value: `"INTERMEDIATE-CATCH-MESSAGE-EVENT"`)

* `SCRIPT-TASK` (value: `"SCRIPT-TASK"`)

* `SERVICE-TASK` (value: `"SERVICE-TASK"`)

* `USER-TASK` (value: `"USER-TASK"`)

* `START-TIMER-EVENT` (value: `"START-TIMER-EVENT"`)

* `INTERMEDIATE-CATCH-TIMER-EVENT` (value: `"INTERMEDIATE-CATCH-TIMER-EVENT"`)

* `END-EMAIL-EVENT` (value: `"END-EMAIL-EVENT"`)

* `INTERMEDIATE-THROW-EMAIL-EVENT` (value: `"INTERMEDIATE-THROW-EMAIL-EVENT"`)




<a name="AssignTypeEnum"></a>
## Enum: AssignTypeEnum


* `CYCLIC` (value: `"CYCLIC"`)

* `MANUAL` (value: `"MANUAL"`)

* `EVALUATE` (value: `"EVALUATE"`)

* `REPORT_TO` (value: `"REPORT_TO"`)

* `SELF_SERVICE` (value: `"SELF_SERVICE"`)

* `STATIC_MI` (value: `"STATIC_MI"`)

* `CANCEL_MI` (value: `"CANCEL_MI"`)

* `MULTIPLE_INSTANCE` (value: `"MULTIPLE_INSTANCE"`)

* `MULTIPLE_INSTANCE_VALUE_BASED` (value: `"MULTIPLE_INSTANCE_VALUE_BASED"`)




