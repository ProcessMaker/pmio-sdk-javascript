# PMIO.ProcessInstances

All URIs are relative to *https://CHANGEME.api.processmaker.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addInstance**](ProcessInstances.md#addInstance) | **POST** /processes/{process_id}/instances | 
[**deleteInstance**](ProcessInstances.md#deleteInstance) | **DELETE** /processes/{process_id}/instances/{instance_id} | 
[**findDataModel**](ProcessInstances.md#findDataModel) | **GET** /processes/{process_id}/instances/{instance_id}/datamodel | 
[**findInstanceById**](ProcessInstances.md#findInstanceById) | **GET** /processes/{process_id}/instances/{instance_id} | 
[**listByFieldInsideDataModel**](ProcessInstances.md#listByFieldInsideDataModel) | **GET** /processes/{process_id}/datamodels/search/{search_param} | 
[**listInstanceTokens**](ProcessInstances.md#listInstanceTokens) | **GET** /processes/{process_id}/instances/{instance_id}/tokens | 
[**listInstances**](ProcessInstances.md#listInstances) | **GET** /processes/{process_id}/instances | 
[**listTaskInstancesByInstanceAndTaskId**](ProcessInstances.md#listTaskInstancesByInstanceAndTaskId) | **GET** /instances/{instance_id}/tasks/{task_id}/task_instances | 
[**listTaskInstancesByInstanceAndTaskIdDelegated**](ProcessInstances.md#listTaskInstancesByInstanceAndTaskIdDelegated) | **GET** /instances/{instance_id}/tasks/{task_id}/task_instances/delegated | 
[**listTaskInstancesByInstanceAndTaskIdStarted**](ProcessInstances.md#listTaskInstancesByInstanceAndTaskIdStarted) | **GET** /instances/{instance_id}/tasks/{task_id}/task_instances/started | 
[**listTokens**](ProcessInstances.md#listTokens) | **GET** /tokens | 
[**updateInstance**](ProcessInstances.md#updateInstance) | **PUT** /processes/{process_id}/instances/{instance_id} | 


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

var apiInstance = new PMIO.ProcessInstances();

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

var apiInstance = new PMIO.ProcessInstances();

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

var apiInstance = new PMIO.ProcessInstances();

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

var apiInstance = new PMIO.ProcessInstances();

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

<a name="listByFieldInsideDataModel"></a>
# **listByFieldInsideDataModel**
> DataModelCollection listByFieldInsideDataModel(processId, searchParam, opts)



This method returns the data model by field passed in get argument.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessInstances();

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
apiInstance.listByFieldInsideDataModel(processId, searchParam, opts, callback);
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

<a name="listInstanceTokens"></a>
# **listInstanceTokens**
> TokenCollection listInstanceTokens(processId, instanceId, opts)



This method retrieves tokens related to the process and instance using the process and instance IDs

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessInstances();

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
apiInstance.listInstanceTokens(processId, instanceId, opts, callback);
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

<a name="listInstances"></a>
# **listInstances**
> InstanceCollection listInstances(processId, opts)



This method retrieves instances related to the process using the process ID

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessInstances();

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
apiInstance.listInstances(processId, opts, callback);
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

<a name="listTaskInstancesByInstanceAndTaskId"></a>
# **listTaskInstancesByInstanceAndTaskId**
> TaskInstanceCollection listTaskInstancesByInstanceAndTaskId(instanceId, taskId)



This method retrieves task instances using the instance ID and the task ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessInstances();

var instanceId = "instanceId_example"; // String | ID of the instance

var taskId = "taskId_example"; // String | ID of the task


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listTaskInstancesByInstanceAndTaskId(instanceId, taskId, callback);
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

<a name="listTaskInstancesByInstanceAndTaskIdDelegated"></a>
# **listTaskInstancesByInstanceAndTaskIdDelegated**
> TaskInstanceCollection listTaskInstancesByInstanceAndTaskIdDelegated(instanceId, taskId)



This method retrieves delegated task instances using the instance ID and the task ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessInstances();

var instanceId = "instanceId_example"; // String | ID of the instance

var taskId = "taskId_example"; // String | ID of the task


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listTaskInstancesByInstanceAndTaskIdDelegated(instanceId, taskId, callback);
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

<a name="listTaskInstancesByInstanceAndTaskIdStarted"></a>
# **listTaskInstancesByInstanceAndTaskIdStarted**
> TaskInstanceCollection listTaskInstancesByInstanceAndTaskIdStarted(instanceId, taskId)



This method retrieves started task instances using the instance ID and the task ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessInstances();

var instanceId = "instanceId_example"; // String | ID of the instance

var taskId = "taskId_example"; // String | ID of the task


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listTaskInstancesByInstanceAndTaskIdStarted(instanceId, taskId, callback);
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

<a name="listTokens"></a>
# **listTokens**
> TokenCollection listTokens(opts)



This method retrieves all tokens of the environment.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessInstances();

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
apiInstance.listTokens(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

var apiInstance = new PMIO.ProcessInstances();

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

