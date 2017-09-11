# PMIO.Task

All URIs are relative to *https://CHANGEME.api.processmaker.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addGroupsToTask**](Task.md#addGroupsToTask) | **PUT** /processes/{process_id}/tasks/{task_id}/groups | 
[**addTask**](Task.md#addTask) | **POST** /processes/{process_id}/tasks | 
[**addTaskConnector**](Task.md#addTaskConnector) | **POST** /processes/{process_id}/tasks/{task_id}/connectors | 
[**deleteTask**](Task.md#deleteTask) | **DELETE** /processes/{process_id}/tasks/{task_id} | 
[**deleteTaskConnector**](Task.md#deleteTaskConnector) | **DELETE** /processes/{process_id}/tasks/{task_id}/connectors/{connector_id} | 
[**findTaskById**](Task.md#findTaskById) | **GET** /processes/{process_id}/tasks/{task_id} | 
[**findTaskConnectorById**](Task.md#findTaskConnectorById) | **GET** /processes/{process_id}/tasks/{task_id}/connectors/{connector_id} | 
[**findTaskConnectors**](Task.md#findTaskConnectors) | **GET** /processes/{process_id}/tasks/{task_id}/connectors | 
[**findTaskInstanceById**](Task.md#findTaskInstanceById) | **GET** /task_instances/{task_instance_id} | 
[**findTaskInstances**](Task.md#findTaskInstances) | **GET** /task_instances | 
[**findTasks**](Task.md#findTasks) | **GET** /processes/{process_id}/tasks | 
[**removeGroupsFromTask**](Task.md#removeGroupsFromTask) | **DELETE** /processes/{process_id}/tasks/{task_id}/groups | 
[**syncGroupsToTask**](Task.md#syncGroupsToTask) | **POST** /processes/{process_id}/tasks/{task_id}/groups | 
[**updateTask**](Task.md#updateTask) | **PUT** /processes/{process_id}/tasks/{task_id} | 
[**updateTaskConnector**](Task.md#updateTaskConnector) | **PUT** /processes/{process_id}/tasks/{task_id}/connectors/{connector_id} | 
[**updateTaskInstance**](Task.md#updateTaskInstance) | **PATCH** /task_instances/{task_instance_id} | 


<a name="addGroupsToTask"></a>
# **addGroupsToTask**
> ResultSuccess addGroupsToTask(processId, taskId, taskAddGroupsItem)



This method assigns group(s) to the chosen task

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Task();

var processId = "processId_example"; // String | Process ID

var taskId = "taskId_example"; // String | ID of the task to be modified

var taskAddGroupsItem = new PMIO.TaskAddGroupsItem(); // TaskAddGroupsItem | JSON API with Group IDs to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addGroupsToTask(processId, taskId, taskAddGroupsItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| Process ID | 
 **taskId** | **String**| ID of the task to be modified | 
 **taskAddGroupsItem** | [**TaskAddGroupsItem**](TaskAddGroupsItem.md)| JSON API with Group IDs to add | 

### Return type

[**ResultSuccess**](ResultSuccess.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="addTask"></a>
# **addTask**
> TaskItem addTask(processId, taskCreateItem)



This method creates a new task.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Task();

var processId = "processId_example"; // String | Process ID related to the task

var taskCreateItem = new PMIO.TaskCreateItem(); // TaskCreateItem | JSON API with the task object to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addTask(processId, taskCreateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| Process ID related to the task | 
 **taskCreateItem** | [**TaskCreateItem**](TaskCreateItem.md)| JSON API with the task object to add | 

### Return type

[**TaskItem**](TaskItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="addTaskConnector"></a>
# **addTaskConnector**
> TaskConnector1 addTaskConnector(processId, taskId, taskConnectorCreateItem)



This method is for creating a new task connector

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Task();

var processId = "processId_example"; // String | ID of the process to fetch

var taskId = "taskId_example"; // String | ID of the task to fetch

var taskConnectorCreateItem = new PMIO.TaskConnectorCreateItem(); // TaskConnectorCreateItem | JSON API with the TaskConnector object to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addTaskConnector(processId, taskId, taskConnectorCreateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process to fetch | 
 **taskId** | **String**| ID of the task to fetch | 
 **taskConnectorCreateItem** | [**TaskConnectorCreateItem**](TaskConnectorCreateItem.md)| JSON API with the TaskConnector object to add | 

### Return type

[**TaskConnector1**](TaskConnector1.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="deleteTask"></a>
# **deleteTask**
> ResultSuccess deleteTask(processId, taskId)



This method deletes a task using the task ID and the process ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Task();

var processId = "processId_example"; // String | Process ID

var taskId = "taskId_example"; // String | ID of a task to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteTask(processId, taskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| Process ID | 
 **taskId** | **String**| ID of a task to delete | 

### Return type

[**ResultSuccess**](ResultSuccess.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="deleteTaskConnector"></a>
# **deleteTaskConnector**
> ResultSuccess deleteTaskConnector(processId, taskId, connectorId)



This method is for deleting a single task connector based on task ID, the process ID and the Connector ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Task();

var processId = "processId_example"; // String | ID of the process item to fetch

var taskId = "taskId_example"; // String | ID of the task item to fetch

var connectorId = "connectorId_example"; // String | ID of TaskConnector to fetch


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteTaskConnector(processId, taskId, connectorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process item to fetch | 
 **taskId** | **String**| ID of the task item to fetch | 
 **connectorId** | **String**| ID of TaskConnector to fetch | 

### Return type

[**ResultSuccess**](ResultSuccess.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findTaskById"></a>
# **findTaskById**
> TaskItem findTaskById(processId, taskId)



This method retrieves a task using its ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Task();

var processId = "processId_example"; // String | ID of the process to return

var taskId = "taskId_example"; // String | ID of the task to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findTaskById(processId, taskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process to return | 
 **taskId** | **String**| ID of the task to return | 

### Return type

[**TaskItem**](TaskItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findTaskConnectorById"></a>
# **findTaskConnectorById**
> TaskConnector1 findTaskConnectorById(processId, taskId, connectorId)



This method is for retrieving a task connector based on its ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Task();

var processId = "processId_example"; // String | ID of the process to fetch

var taskId = "taskId_example"; // String | ID of the task to fetch

var connectorId = "connectorId_example"; // String | ID of TaskConnector to fetch


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findTaskConnectorById(processId, taskId, connectorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process to fetch | 
 **taskId** | **String**| ID of the task to fetch | 
 **connectorId** | **String**| ID of TaskConnector to fetch | 

### Return type

[**TaskConnector1**](TaskConnector1.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findTaskConnectors"></a>
# **findTaskConnectors**
> TaskConnectorsCollection findTaskConnectors(processId, taskId, opts)



This method returns all task connectors related to the run process and task.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Task();

var processId = "processId_example"; // String | ID of the process to fetch

var taskId = "taskId_example"; // String | ID of the task to fetch

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
apiInstance.findTaskConnectors(processId, taskId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process to fetch | 
 **taskId** | **String**| ID of the task to fetch | 
 **page** | **Integer**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Integer**| Amount of items per page | [optional] [default to 15]

### Return type

[**TaskConnectorsCollection**](TaskConnectorsCollection.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findTaskInstanceById"></a>
# **findTaskInstanceById**
> InlineResponse200 findTaskInstanceById(taskInstanceId, opts)



This method retrieves a task instance based on its ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Task();

var taskInstanceId = "taskInstanceId_example"; // String | ID of task instance to return

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
apiInstance.findTaskInstanceById(taskInstanceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskInstanceId** | **String**| ID of task instance to return | 
 **page** | **Integer**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Integer**| Amount of items per page | [optional] [default to 15]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findTaskInstances"></a>
# **findTaskInstances**
> TaskInstanceCollection findTaskInstances(opts)



This method retrieves all existing task instances.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Task();

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
apiInstance.findTaskInstances(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Integer**| Amount of items per page | [optional] [default to 15]

### Return type

[**TaskInstanceCollection**](TaskInstanceCollection.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findTasks"></a>
# **findTasks**
> TaskCollection findTasks(processId, opts)



This method is intended for returning a list of all tasks related to the process.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Task();

var processId = "processId_example"; // String | ID of the process relative to the task

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
apiInstance.findTasks(processId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process relative to the task | 
 **page** | **Integer**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Integer**| Amount of items per page | [optional] [default to 15]

### Return type

[**TaskCollection**](TaskCollection.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="removeGroupsFromTask"></a>
# **removeGroupsFromTask**
> ResultSuccess removeGroupsFromTask(processId, taskId, taskRemoveGroupsItem)



This method removes groups from a task.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Task();

var processId = "processId_example"; // String | Process ID

var taskId = "taskId_example"; // String | Task ID

var taskRemoveGroupsItem = new PMIO.TaskRemoveGroupsItem(); // TaskRemoveGroupsItem | JSON API response with Group IDs to remove


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeGroupsFromTask(processId, taskId, taskRemoveGroupsItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| Process ID | 
 **taskId** | **String**| Task ID | 
 **taskRemoveGroupsItem** | [**TaskRemoveGroupsItem**](TaskRemoveGroupsItem.md)| JSON API response with Group IDs to remove | 

### Return type

[**ResultSuccess**](ResultSuccess.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="syncGroupsToTask"></a>
# **syncGroupsToTask**
> ResultSuccess syncGroupsToTask(processId, taskId, taskSyncGroupsItem)



This method synchronizes one or more groups with a task.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Task();

var processId = "processId_example"; // String | Process ID

var taskId = "taskId_example"; // String | ID of the task to modify

var taskSyncGroupsItem = new PMIO.TaskSyncGroupsItem(); // TaskSyncGroupsItem | JSON API response with group IDs to sync


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.syncGroupsToTask(processId, taskId, taskSyncGroupsItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| Process ID | 
 **taskId** | **String**| ID of the task to modify | 
 **taskSyncGroupsItem** | [**TaskSyncGroupsItem**](TaskSyncGroupsItem.md)| JSON API response with group IDs to sync | 

### Return type

[**ResultSuccess**](ResultSuccess.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="updateTask"></a>
# **updateTask**
> TaskItem updateTask(processId, taskId, taskUpdateItem)



This method is for updating an existing task.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Task();

var processId = "processId_example"; // String | ID of the process to fetch

var taskId = "taskId_example"; // String | ID of the task to fetch

var taskUpdateItem = new PMIO.TaskUpdateItem(); // TaskUpdateItem | Task object to edit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTask(processId, taskId, taskUpdateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process to fetch | 
 **taskId** | **String**| ID of the task to fetch | 
 **taskUpdateItem** | [**TaskUpdateItem**](TaskUpdateItem.md)| Task object to edit | 

### Return type

[**TaskItem**](TaskItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="updateTaskConnector"></a>
# **updateTaskConnector**
> TaskConnector1 updateTaskConnector(processId, taskId, connectorId, taskConnectorUpdateItem)



This method updates the existing task connector with new parameter values.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Task();

var processId = "processId_example"; // String | ID of the process to fetch

var taskId = "taskId_example"; // String | ID of the task to fetch

var connectorId = "connectorId_example"; // String | ID of the task connector to fetch

var taskConnectorUpdateItem = new PMIO.TaskConnectorUpdateItem(); // TaskConnectorUpdateItem | TaskConnector object to edit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTaskConnector(processId, taskId, connectorId, taskConnectorUpdateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process to fetch | 
 **taskId** | **String**| ID of the task to fetch | 
 **connectorId** | **String**| ID of the task connector to fetch | 
 **taskConnectorUpdateItem** | [**TaskConnectorUpdateItem**](TaskConnectorUpdateItem.md)| TaskConnector object to edit | 

### Return type

[**TaskConnector1**](TaskConnector1.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="updateTaskInstance"></a>
# **updateTaskInstance**
> InlineResponse200 updateTaskInstance(taskInstanceId, taskInstanceUpdateItem)



This method updates an existing task instance.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Task();

var taskInstanceId = "taskInstanceId_example"; // String | ID of the task instance to retrieve

var taskInstanceUpdateItem = new PMIO.TaskInstanceUpdateItem(); // TaskInstanceUpdateItem | Task instance object to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTaskInstance(taskInstanceId, taskInstanceUpdateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskInstanceId** | **String**| ID of the task instance to retrieve | 
 **taskInstanceUpdateItem** | [**TaskInstanceUpdateItem**](TaskInstanceUpdateItem.md)| Task instance object to update | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

