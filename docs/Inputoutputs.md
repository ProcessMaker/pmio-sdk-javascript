# PMIO.Inputoutputs

All URIs are relative to *https://CHANGEME.api.processmaker.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addInputOutput**](Inputoutputs.md#addInputOutput) | **POST** /processes/{process_id}/tasks/{task_id}/inputoutput | 
[**deleteInputOutput**](Inputoutputs.md#deleteInputOutput) | **DELETE** /processes/{process_id}/tasks/{task_id}/inputoutput/{inputoutput_uid} | 
[**findInputOutputById**](Inputoutputs.md#findInputOutputById) | **GET** /processes/{process_id}/tasks/{task_id}/inputoutput/{inputoutput_uid} | 
[**listInputOutputs**](Inputoutputs.md#listInputOutputs) | **GET** /processes/{process_id}/tasks/{task_id}/inputoutput | 
[**updateInputOutput**](Inputoutputs.md#updateInputOutput) | **PUT** /processes/{process_id}/tasks/{task_id}/inputoutput/{inputoutput_uid} | 


<a name="addInputOutput"></a>
# **addInputOutput**
> InputOutputItem addInputOutput(processId, taskId, inputOutputCreateItem)



This method creates a new Input/Output object.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Inputoutputs();

var processId = "processId_example"; // String | Process ID related to Input/Output object

var taskId = "taskId_example"; // String | Task instance ID related to Input/Output object

var inputOutputCreateItem = new PMIO.InputOutputCreateItem(); // InputOutputCreateItem | Create and add a new Input/Output object with JSON API


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addInputOutput(processId, taskId, inputOutputCreateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| Process ID related to Input/Output object | 
 **taskId** | **String**| Task instance ID related to Input/Output object | 
 **inputOutputCreateItem** | [**InputOutputCreateItem**](InputOutputCreateItem.md)| Create and add a new Input/Output object with JSON API | 

### Return type

[**InputOutputItem**](InputOutputItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="deleteInputOutput"></a>
# **deleteInputOutput**
> ResultSuccess deleteInputOutput(processId, taskId, inputoutputUid)



This method deletes the Input/Output based on the Input/Output ID, process ID and task ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Inputoutputs();

var processId = "processId_example"; // String | Process ID related to the Input/Output object

var taskId = "taskId_example"; // String | Task instance ID related to Input/Output object

var inputoutputUid = "inputoutputUid_example"; // String | Input/Output ID to fetch


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteInputOutput(processId, taskId, inputoutputUid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| Process ID related to the Input/Output object | 
 **taskId** | **String**| Task instance ID related to Input/Output object | 
 **inputoutputUid** | **String**| Input/Output ID to fetch | 

### Return type

[**ResultSuccess**](ResultSuccess.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findInputOutputById"></a>
# **findInputOutputById**
> InputOutputItem findInputOutputById(processId, taskId, inputoutputUid)



This method retrieves an Input/Output object using its ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Inputoutputs();

var processId = "processId_example"; // String | Process ID related to the Input/Output object

var taskId = "taskId_example"; // String | Task instance ID related to the Input/Output object

var inputoutputUid = "inputoutputUid_example"; // String | ID of Input/Output to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findInputOutputById(processId, taskId, inputoutputUid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| Process ID related to the Input/Output object | 
 **taskId** | **String**| Task instance ID related to the Input/Output object | 
 **inputoutputUid** | **String**| ID of Input/Output to return | 

### Return type

[**InputOutputItem**](InputOutputItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="listInputOutputs"></a>
# **listInputOutputs**
> InputOutputCollection listInputOutputs(processId, taskId, opts)



This method retrieves all existing Input/Output objects in the related task instance.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Inputoutputs();

var processId = "processId_example"; // String | Process ID related to Input/Output object

var taskId = "taskId_example"; // String | Task instance ID related to Input/Output object

var opts = { 
  'page': 1, // Integer | Page number to fetch
  'perPage': 15 // Integer | Amount of items per page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listInputOutputs(processId, taskId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| Process ID related to Input/Output object | 
 **taskId** | **String**| Task instance ID related to Input/Output object | 
 **page** | **Integer**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Integer**| Amount of items per page | [optional] [default to 15]

### Return type

[**InputOutputCollection**](InputOutputCollection.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="updateInputOutput"></a>
# **updateInputOutput**
> InputOutputItem updateInputOutput(processId, taskId, inputoutputUid, inputOutputUpdateItem)



This method updates an existing Input/Output object.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Inputoutputs();

var processId = "processId_example"; // String | Process ID related to the Input/Output object

var taskId = "taskId_example"; // String | Task instance ID related to the Input/Output object

var inputoutputUid = "inputoutputUid_example"; // String | ID of Input/Output to retrieve

var inputOutputUpdateItem = new PMIO.InputOutputUpdateItem(); // InputOutputUpdateItem | Input/Output object to edit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateInputOutput(processId, taskId, inputoutputUid, inputOutputUpdateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| Process ID related to the Input/Output object | 
 **taskId** | **String**| Task instance ID related to the Input/Output object | 
 **inputoutputUid** | **String**| ID of Input/Output to retrieve | 
 **inputOutputUpdateItem** | [**InputOutputUpdateItem**](InputOutputUpdateItem.md)| Input/Output object to edit | 

### Return type

[**InputOutputItem**](InputOutputItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

