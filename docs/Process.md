# PMIO.Process

All URIs are relative to *https://CHANGEME.api.processmaker.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProcess**](Process.md#addProcess) | **POST** /processes | 
[**deleteProcess**](Process.md#deleteProcess) | **DELETE** /processes/{id} | 
[**findProcessById**](Process.md#findProcessById) | **GET** /processes/{id} | 
[**findProcesses**](Process.md#findProcesses) | **GET** /processes | 
[**importBpmnFile**](Process.md#importBpmnFile) | **POST** /processes/import | 
[**updateProcess**](Process.md#updateProcess) | **PUT** /processes/{id} | 


<a name="addProcess"></a>
# **addProcess**
> ProcessItem addProcess(processCreateItem)



This method creates a new process.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Process();

var processCreateItem = new PMIO.ProcessCreateItem(); // ProcessCreateItem | JSON API response with the process object to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addProcess(processCreateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processCreateItem** | [**ProcessCreateItem**](ProcessCreateItem.md)| JSON API response with the process object to add | 

### Return type

[**ProcessItem**](ProcessItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="deleteProcess"></a>
# **deleteProcess**
> ResultSuccess deleteProcess(id)



This method deletes a process using the process ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Process();

var id = "id_example"; // String | Process ID to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteProcess(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Process ID to delete | 

### Return type

[**ResultSuccess**](ResultSuccess.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findProcessById"></a>
# **findProcessById**
> ProcessItem findProcessById(id)



This method retrieves a process using its ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Process();

var id = "id_example"; // String | ID of the process to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findProcessById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the process to return | 

### Return type

[**ProcessItem**](ProcessItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findProcesses"></a>
# **findProcesses**
> ProcessCollection findProcesses(opts)



This method retrieves all existing processes.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Process();

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
apiInstance.findProcesses(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Integer**| Amount of items per page | [optional] [default to 15]

### Return type

[**ProcessCollection**](ProcessCollection.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="importBpmnFile"></a>
# **importBpmnFile**
> ProcessCollection1 importBpmnFile(bpmnImportItem)



This method imports BPMN 2.0 files. A new process(es) is/are created and its object returned back when import is successful.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Process();

var bpmnImportItem = new PMIO.BpmnImportItem(); // BpmnImportItem | JSON API with the BPMN file to import


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importBpmnFile(bpmnImportItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bpmnImportItem** | [**BpmnImportItem**](BpmnImportItem.md)| JSON API with the BPMN file to import | 

### Return type

[**ProcessCollection1**](ProcessCollection1.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="updateProcess"></a>
# **updateProcess**
> ProcessItem updateProcess(id, processUpdateItem)



This method updates an existing process.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Process();

var id = "id_example"; // String | ID of the process to retrieve

var processUpdateItem = new PMIO.ProcessUpdateItem(); // ProcessUpdateItem | Process object to edit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateProcess(id, processUpdateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the process to retrieve | 
 **processUpdateItem** | [**ProcessUpdateItem**](ProcessUpdateItem.md)| Process object to edit | 

### Return type

[**ProcessItem**](ProcessItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

