# PMIO.ProcessInstance

All URIs are relative to *https://CHANGEME.api.processmaker.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addInstance**](ProcessInstance.md#addInstance) | **POST** /processes/{process_id}/instances | 
[**deleteInstance**](ProcessInstance.md#deleteInstance) | **DELETE** /processes/{process_id}/instances/{instance_id} | 
[**findByFieldInsideDataModel**](ProcessInstance.md#findByFieldInsideDataModel) | **GET** /processes/{process_id}/datamodels/search/{search_param} | 
[**findDataModel**](ProcessInstance.md#findDataModel) | **GET** /processes/{process_id}/instances/{instance_id}/datamodel | 
[**findInstanceById**](ProcessInstance.md#findInstanceById) | **GET** /processes/{process_id}/instances/{instance_id} | 
[**findInstances**](ProcessInstance.md#findInstances) | **GET** /processes/{process_id}/instances | 
[**findTaskInstancesByInstanceAndTaskId**](ProcessInstance.md#findTaskInstancesByInstanceAndTaskId) | **GET** /instances/{instance_id}/tasks/{task_id}/task_instances | 
[**findTaskInstancesByInstanceAndTaskIdDelegated**](ProcessInstance.md#findTaskInstancesByInstanceAndTaskIdDelegated) | **GET** /instances/{instance_id}/tasks/{task_id}/task_instances/delegated | 
[**findTaskInstancesByInstanceAndTaskIdStarted**](ProcessInstance.md#findTaskInstancesByInstanceAndTaskIdStarted) | **GET** /instances/{instance_id}/tasks/{task_id}/task_instances/started | 
[**findTokens**](ProcessInstance.md#findTokens) | **GET** /processes/{process_id}/instances/{instance_id}/tokens | 
[**updateInstance**](ProcessInstance.md#updateInstance) | **PUT** /processes/{process_id}/instances/{instance_id} | 


<a name="addInstance"></a>
# **addInstance**
> InstanceItem addInstance(processId, instanceCreateItem)



This method creates a new instance.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessInstance();

var processId = "processId_example"; // String | Process ID related to the instance

var instanceCreateItem = new PMIO.InstanceCreateItem(); // InstanceCreateItem | JSON API response with the instance object to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addInstance(processId, instanceCreateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| Process ID related to the instance | 
 **instanceCreateItem** | [**InstanceCreateItem**](InstanceCreateItem.md)| JSON API response with the instance object to add | 

### Return type

[**InstanceItem**](InstanceItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="deleteInstance"></a>
# **deleteInstance**
> ResultSuccess deleteInstance(processId, instanceId)



This method deletes an instance using the instance ID and the process ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessInstance();

var processId = "processId_example"; // String | Process ID

var instanceId = "instanceId_example"; // String | ID of the instance to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteInstance(processId, instanceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| Process ID | 
 **instanceId** | **String**| ID of the instance to delete | 

### Return type

[**ResultSuccess**](ResultSuccess.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findByFieldInsideDataModel"></a>
# **findByFieldInsideDataModel**
> DataModelCollection findByFieldInsideDataModel(processId, searchParam, opts)



This method returns the data model by field passed in get argument.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessInstance();

var processId = "processId_example"; // String | ID of the process to return

var searchParam = "searchParam_example"; // String | Key and value of searched field in DataModel

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
apiInstance.findByFieldInsideDataModel(processId, searchParam, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process to return | 
 **searchParam** | **String**| Key and value of searched field in DataModel | 
 **page** | **Integer**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Integer**| Amount of items per page | [optional] [default to 15]

### Return type

[**DataModelCollection**](DataModelCollection.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findDataModel"></a>
# **findDataModel**
> DataModelItem1 findDataModel(processId, instanceId, opts)



This method returns the instance data model and lets the user work with it directly.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessInstance();

var processId = "processId_example"; // String | ID of the process to return

var instanceId = "instanceId_example"; // String | ID of the instance to return

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
apiInstance.findDataModel(processId, instanceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process to return | 
 **instanceId** | **String**| ID of the instance to return | 
 **page** | **Integer**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Integer**| Amount of items per page | [optional] [default to 15]

### Return type

[**DataModelItem1**](DataModelItem1.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findInstanceById"></a>
# **findInstanceById**
> InstanceItem findInstanceById(processId, instanceId)



This method retrieves an instance using its ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessInstance();

var processId = "processId_example"; // String | ID of the process to return

var instanceId = "instanceId_example"; // String | ID of the instance to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findInstanceById(processId, instanceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process to return | 
 **instanceId** | **String**| ID of the instance to return | 

### Return type

[**InstanceItem**](InstanceItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findInstances"></a>
# **findInstances**
> InstanceCollection findInstances(processId, opts)



This method retrieves instances related to the process using the process ID

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessInstance();

var processId = "processId_example"; // String | Process ID related to the instances

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
apiInstance.findInstances(processId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| Process ID related to the instances | 
 **page** | **Integer**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Integer**| Amount of items per page | [optional] [default to 15]

### Return type

[**InstanceCollection**](InstanceCollection.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findTaskInstancesByInstanceAndTaskId"></a>
# **findTaskInstancesByInstanceAndTaskId**
> TaskInstanceCollection findTaskInstancesByInstanceAndTaskId(instanceId, taskId)



This method retrieves task instances using the instance ID and the task ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessInstance();

var instanceId = "instanceId_example"; // String | ID of the instance

var taskId = "taskId_example"; // String | ID of the task


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findTaskInstancesByInstanceAndTaskId(instanceId, taskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| ID of the instance | 
 **taskId** | **String**| ID of the task | 

### Return type

[**TaskInstanceCollection**](TaskInstanceCollection.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findTaskInstancesByInstanceAndTaskIdDelegated"></a>
# **findTaskInstancesByInstanceAndTaskIdDelegated**
> TaskInstanceCollection findTaskInstancesByInstanceAndTaskIdDelegated(instanceId, taskId)



This method retrieves delegated task instances using the instance ID and the task ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessInstance();

var instanceId = "instanceId_example"; // String | ID of the instance

var taskId = "taskId_example"; // String | ID of the task


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findTaskInstancesByInstanceAndTaskIdDelegated(instanceId, taskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| ID of the instance | 
 **taskId** | **String**| ID of the task | 

### Return type

[**TaskInstanceCollection**](TaskInstanceCollection.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findTaskInstancesByInstanceAndTaskIdStarted"></a>
# **findTaskInstancesByInstanceAndTaskIdStarted**
> TaskInstanceCollection findTaskInstancesByInstanceAndTaskIdStarted(instanceId, taskId)



This method retrieves started task instances using the instance ID and the task ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessInstance();

var instanceId = "instanceId_example"; // String | ID of the instance

var taskId = "taskId_example"; // String | ID of the task


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findTaskInstancesByInstanceAndTaskIdStarted(instanceId, taskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| ID of the instance | 
 **taskId** | **String**| ID of the task | 

### Return type

[**TaskInstanceCollection**](TaskInstanceCollection.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findTokens"></a>
# **findTokens**
> TokenCollection findTokens(processId, instanceId, opts)



This method retrieves tokens related to the process and instance using the process and instance IDs

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessInstance();

var processId = "processId_example"; // String | Process ID

var instanceId = "instanceId_example"; // String | Instance ID related to the process

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
apiInstance.findTokens(processId, instanceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| Process ID | 
 **instanceId** | **String**| Instance ID related to the process | 
 **page** | **Integer**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Integer**| Amount of items per page | [optional] [default to 15]

### Return type

[**TokenCollection**](TokenCollection.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="updateInstance"></a>
# **updateInstance**
> InstanceItem updateInstance(processId, instanceId, instanceUpdateItem)



This method updates  an existing instance.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessInstance();

var processId = "processId_example"; // String | ID of the process to retrieve

var instanceId = "instanceId_example"; // String | ID of the instance to retrieve

var instanceUpdateItem = new PMIO.InstanceUpdateItem(); // InstanceUpdateItem | Instance object to edit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateInstance(processId, instanceId, instanceUpdateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process to retrieve | 
 **instanceId** | **String**| ID of the instance to retrieve | 
 **instanceUpdateItem** | [**InstanceUpdateItem**](InstanceUpdateItem.md)| Instance object to edit | 

### Return type

[**InstanceItem**](InstanceItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

