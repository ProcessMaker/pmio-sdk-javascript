# PMIO.Client

All URIs are relative to *https://CHANGEME.api.processmaker.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addEvent**](Client.md#addEvent) | **POST** /processes/{process_id}/events | 
[**addEventConnector**](Client.md#addEventConnector) | **POST** /processes/{process_id}/events/{event_id}/connectors | 
[**addFlow**](Client.md#addFlow) | **POST** /processes/{process_id}/flows | 
[**addGateway**](Client.md#addGateway) | **POST** /processes/{process_id}/gateways | 
[**addGroup**](Client.md#addGroup) | **POST** /groups | 
[**addGroupsToTask**](Client.md#addGroupsToTask) | **PUT** /processes/{process_id}/tasks/{task_id}/groups | 
[**addInputOutput**](Client.md#addInputOutput) | **POST** /processes/{process_id}/tasks/{task_id}/inputoutput | 
[**addInstance**](Client.md#addInstance) | **POST** /processes/{process_id}/instances | 
[**addOauthClient**](Client.md#addOauthClient) | **POST** /users/{user_id}/clients | 
[**addProcess**](Client.md#addProcess) | **POST** /processes | 
[**addTask**](Client.md#addTask) | **POST** /processes/{process_id}/tasks | 
[**addTaskConnector**](Client.md#addTaskConnector) | **POST** /processes/{process_id}/tasks/{task_id}/connectors | 
[**addUser**](Client.md#addUser) | **POST** /users | 
[**addUsersToGroup**](Client.md#addUsersToGroup) | **PUT** /groups/{id}/users | 
[**callImport**](Client.md#callImport) | **POST** /processes/import/bpmn | 
[**deleteEvent**](Client.md#deleteEvent) | **DELETE** /processes/{process_id}/events/{event_id} | 
[**deleteEventConnector**](Client.md#deleteEventConnector) | **DELETE** /processes/{process_id}/events/{event_id}/connectors/{connector_id} | 
[**deleteFlow**](Client.md#deleteFlow) | **DELETE** /processes/{process_id}/flows/{flow_id} | 
[**deleteGateway**](Client.md#deleteGateway) | **DELETE** /processes/{process_id}/gateways/{gateway_id} | 
[**deleteGroup**](Client.md#deleteGroup) | **DELETE** /groups/{id} | 
[**deleteInputOutput**](Client.md#deleteInputOutput) | **DELETE** /processes/{process_id}/tasks/{task_id}/inputoutput/{inputoutput_uid} | 
[**deleteInstance**](Client.md#deleteInstance) | **DELETE** /processes/{process_id}/instances/{instance_id} | 
[**deleteOauthClient**](Client.md#deleteOauthClient) | **DELETE** /users/{user_id}/clients/{client_id} | 
[**deleteProcess**](Client.md#deleteProcess) | **DELETE** /processes/{id} | 
[**deleteTask**](Client.md#deleteTask) | **DELETE** /processes/{process_id}/tasks/{task_id} | 
[**deleteTaskConnector**](Client.md#deleteTaskConnector) | **DELETE** /processes/{process_id}/tasks/{task_id}/connectors/{connector_id} | 
[**deleteUser**](Client.md#deleteUser) | **DELETE** /users/{id} | 
[**eventTrigger**](Client.md#eventTrigger) | **POST** /processes/{process_id}/events/{event_id}/trigger | 
[**eventWebhook**](Client.md#eventWebhook) | **POST** /processes/{process_id}/events/{event_id}/webhook | 
[**findDataModel**](Client.md#findDataModel) | **GET** /processes/{process_id}/instances/{instance_id}/datamodel | 
[**findEventById**](Client.md#findEventById) | **GET** /processes/{process_id}/events/{event_id} | 
[**findEventConnectorById**](Client.md#findEventConnectorById) | **GET** /processes/{process_id}/events/{event_id}/connectors/{connector_id} | 
[**findFlowById**](Client.md#findFlowById) | **GET** /processes/{process_id}/flows/{flow_id} | 
[**findGatewayById**](Client.md#findGatewayById) | **GET** /processes/{process_id}/gateways/{gateway_id} | 
[**findGroupById**](Client.md#findGroupById) | **GET** /groups/{id} | 
[**findInputOutputById**](Client.md#findInputOutputById) | **GET** /processes/{process_id}/tasks/{task_id}/inputoutput/{inputoutput_uid} | 
[**findInstanceById**](Client.md#findInstanceById) | **GET** /processes/{process_id}/instances/{instance_id} | 
[**findOauthClientById**](Client.md#findOauthClientById) | **GET** /users/{user_id}/clients/{client_id} | 
[**findProcessById**](Client.md#findProcessById) | **GET** /processes/{id} | 
[**findTaskById**](Client.md#findTaskById) | **GET** /processes/{process_id}/tasks/{task_id} | 
[**findTaskConnectorById**](Client.md#findTaskConnectorById) | **GET** /processes/{process_id}/tasks/{task_id}/connectors/{connector_id} | 
[**findTaskInstanceById**](Client.md#findTaskInstanceById) | **GET** /task_instances/{task_instance_id} | 
[**findUserById**](Client.md#findUserById) | **GET** /users/{id} | 
[**importBpmnFile**](Client.md#importBpmnFile) | **POST** /processes/import | 
[**listByFieldInsideDataModel**](Client.md#listByFieldInsideDataModel) | **GET** /processes/{process_id}/datamodels/search/{search_param} | 
[**listEventConnectors**](Client.md#listEventConnectors) | **GET** /processes/{process_id}/events/{event_id}/connectors | 
[**listEvents**](Client.md#listEvents) | **GET** /processes/{process_id}/events | 
[**listFlows**](Client.md#listFlows) | **GET** /processes/{process_id}/flows | 
[**listGateways**](Client.md#listGateways) | **GET** /processes/{process_id}/gateways | 
[**listGroups**](Client.md#listGroups) | **GET** /groups | 
[**listInputOutputs**](Client.md#listInputOutputs) | **GET** /processes/{process_id}/tasks/{task_id}/inputoutput | 
[**listInstances**](Client.md#listInstances) | **GET** /processes/{process_id}/instances | 
[**listLogs**](Client.md#listLogs) | **GET** /logs/ | 
[**listOauthClients**](Client.md#listOauthClients) | **GET** /users/{user_id}/clients | 
[**listProcesses**](Client.md#listProcesses) | **GET** /processes | 
[**listTaskConnectors**](Client.md#listTaskConnectors) | **GET** /processes/{process_id}/tasks/{task_id}/connectors | 
[**listTaskInstances**](Client.md#listTaskInstances) | **GET** /task_instances | 
[**listTaskInstancesByInstanceAndTaskId**](Client.md#listTaskInstancesByInstanceAndTaskId) | **GET** /instances/{instance_id}/tasks/{task_id}/task_instances | 
[**listTaskInstancesByInstanceAndTaskIdDelegated**](Client.md#listTaskInstancesByInstanceAndTaskIdDelegated) | **GET** /instances/{instance_id}/tasks/{task_id}/task_instances/delegated | 
[**listTaskInstancesByInstanceAndTaskIdStarted**](Client.md#listTaskInstancesByInstanceAndTaskIdStarted) | **GET** /instances/{instance_id}/tasks/{task_id}/task_instances/started | 
[**listTasks**](Client.md#listTasks) | **GET** /processes/{process_id}/tasks | 
[**listTokens**](Client.md#listTokens) | **GET** /processes/{process_id}/instances/{instance_id}/tokens | 
[**listUsers**](Client.md#listUsers) | **GET** /users | 
[**logSummary**](Client.md#logSummary) | **GET** /logs/summary | 
[**myselfUser**](Client.md#myselfUser) | **GET** /users/myself | 
[**removeGroupsFromTask**](Client.md#removeGroupsFromTask) | **DELETE** /processes/{process_id}/tasks/{task_id}/groups | 
[**removeUsersFromGroup**](Client.md#removeUsersFromGroup) | **DELETE** /groups/{id}/users | 
[**syncGroupsToTask**](Client.md#syncGroupsToTask) | **POST** /processes/{process_id}/tasks/{task_id}/groups | 
[**syncUsersToGroup**](Client.md#syncUsersToGroup) | **POST** /groups/{id}/users | 
[**updateEvent**](Client.md#updateEvent) | **PUT** /processes/{process_id}/events/{event_id} | 
[**updateEventConnector**](Client.md#updateEventConnector) | **PUT** /processes/{process_id}/events/{event_id}/connectors/{connector_id} | 
[**updateFlow**](Client.md#updateFlow) | **PUT** /processes/{process_id}/flows/{flow_id} | 
[**updateGateway**](Client.md#updateGateway) | **PUT** /processes/{process_id}/gateways/{gateway_id} | 
[**updateGroup**](Client.md#updateGroup) | **PUT** /groups/{id} | 
[**updateInputOutput**](Client.md#updateInputOutput) | **PUT** /processes/{process_id}/tasks/{task_id}/inputoutput/{inputoutput_uid} | 
[**updateInstance**](Client.md#updateInstance) | **PUT** /processes/{process_id}/instances/{instance_id} | 
[**updateOauthClient**](Client.md#updateOauthClient) | **PUT** /users/{user_id}/clients/{client_id} | 
[**updateProcess**](Client.md#updateProcess) | **PUT** /processes/{id} | 
[**updateTask**](Client.md#updateTask) | **PUT** /processes/{process_id}/tasks/{task_id} | 
[**updateTaskConnector**](Client.md#updateTaskConnector) | **PUT** /processes/{process_id}/tasks/{task_id}/connectors/{connector_id} | 
[**updateTaskInstance**](Client.md#updateTaskInstance) | **PATCH** /task_instances/{task_instance_id} | 
[**updateUser**](Client.md#updateUser) | **PUT** /users/{id} | 


<a name="addEvent"></a>
# **addEvent**
> EventItem addEvent(processId, eventCreateItem)



This method creates the new event.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var processId = "processId_example"; // String | ID of the process related to the event

var eventCreateItem = new PMIO.EventCreateItem(); // EventCreateItem | JSON API response with the event object to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addEvent(processId, eventCreateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process related to the event | 
 **eventCreateItem** | [**EventCreateItem**](EventCreateItem.md)| JSON API response with the event object to add | 

### Return type

[**EventItem**](EventItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="addEventConnector"></a>
# **addEventConnector**
> EventConnector1 addEventConnector(processId, eventId, eventConnectorCreateItem)



This method is intended for creating a new event connector.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var processId = "processId_example"; // String | ID of the process to fetch

var eventId = "eventId_example"; // String | ID of the event to fetch

var eventConnectorCreateItem = new PMIO.EventConnectorCreateItem(); // EventConnectorCreateItem | JSON API with the EventConnector object to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addEventConnector(processId, eventId, eventConnectorCreateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process to fetch | 
 **eventId** | **String**| ID of the event to fetch | 
 **eventConnectorCreateItem** | [**EventConnectorCreateItem**](EventConnectorCreateItem.md)| JSON API with the EventConnector object to add | 

### Return type

[**EventConnector1**](EventConnector1.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="addFlow"></a>
# **addFlow**
> FlowItem addFlow(processId, flowCreateItem)



This method creates a new Sequence Flow.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var processId = "processId_example"; // String | ID of the process related to the flow

var flowCreateItem = new PMIO.FlowCreateItem(); // FlowCreateItem | JSON API response with the Flow object to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addFlow(processId, flowCreateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process related to the flow | 
 **flowCreateItem** | [**FlowCreateItem**](FlowCreateItem.md)| JSON API response with the Flow object to add | 

### Return type

[**FlowItem**](FlowItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="addGateway"></a>
# **addGateway**
> GatewayItem addGateway(processId, gatewayCreateItem)



This method creates a new gateway.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var processId = "processId_example"; // String | ID of the process related to the gateway

var gatewayCreateItem = new PMIO.GatewayCreateItem(); // GatewayCreateItem | JSON API response with the gateway object to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addGateway(processId, gatewayCreateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process related to the gateway | 
 **gatewayCreateItem** | [**GatewayCreateItem**](GatewayCreateItem.md)| JSON API response with the gateway object to add | 

### Return type

[**GatewayItem**](GatewayItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="addGroup"></a>
# **addGroup**
> GroupItem addGroup(groupCreateItem)



This method creates a new group.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var groupCreateItem = new PMIO.GroupCreateItem(); // GroupCreateItem | JSON API with the Group object to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addGroup(groupCreateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupCreateItem** | [**GroupCreateItem**](GroupCreateItem.md)| JSON API with the Group object to add | 

### Return type

[**GroupItem**](GroupItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

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

var apiInstance = new PMIO.Client();

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

var apiInstance = new PMIO.Client();

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

var apiInstance = new PMIO.Client();

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

<a name="addOauthClient"></a>
# **addOauthClient**
> OauthClientItem addOauthClient(userId, oauthClientCreateItem)



This method creates a new Oauth client for the user.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var userId = "userId_example"; // String | ID of the user related to the Oauth client

var oauthClientCreateItem = new PMIO.OauthClientCreateItem(); // OauthClientCreateItem | JSON API with the Oauth Client object to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addOauthClient(userId, oauthClientCreateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| ID of the user related to the Oauth client | 
 **oauthClientCreateItem** | [**OauthClientCreateItem**](OauthClientCreateItem.md)| JSON API with the Oauth Client object to add | 

### Return type

[**OauthClientItem**](OauthClientItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

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

var apiInstance = new PMIO.Client();

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

var apiInstance = new PMIO.Client();

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

var apiInstance = new PMIO.Client();

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

<a name="addUser"></a>
# **addUser**
> UserItem addUser(userCreateItem, opts)



This method creates a new user in the system. The client_id will appear in the results.  The &#x60;client_id&#x60; is required to obtain a &#x60;client_secret&#x60; and then you will be able to use it in an Oauth authorization key. Refer to [Oauth Client APIs](#tag/oauth)

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var userCreateItem = new PMIO.UserCreateItem(); // UserCreateItem | JSON API with the User object to add

var opts = { 
  'createClient': "1" // String | If not empty - a new Oauth Client would be created along with User
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addUser(userCreateItem, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCreateItem** | [**UserCreateItem**](UserCreateItem.md)| JSON API with the User object to add | 
 **createClient** | **String**| If not empty - a new Oauth Client would be created along with User | [optional] [default to 1]

### Return type

[**UserItem**](UserItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="addUsersToGroup"></a>
# **addUsersToGroup**
> ResultSuccess addUsersToGroup(id, groupAddUsersItem)



This method adds one or more new users to a group.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var id = "id_example"; // String | ID of group to be modified

var groupAddUsersItem = new PMIO.GroupAddUsersItem(); // GroupAddUsersItem | JSON API response with array of user IDs


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addUsersToGroup(id, groupAddUsersItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of group to be modified | 
 **groupAddUsersItem** | [**GroupAddUsersItem**](GroupAddUsersItem.md)| JSON API response with array of user IDs | 

### Return type

[**ResultSuccess**](ResultSuccess.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="callImport"></a>
# **callImport**
> ProcessCollection1 callImport(importItem)



This method imports BPMN 2.0 files. A new process(es) is/are created and its object returned back when import is successful.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var importItem = new PMIO.ImportItem(); // ImportItem | JSON API with the BPMN file to import


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.callImport(importItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **importItem** | [**ImportItem**](ImportItem.md)| JSON API with the BPMN file to import | 

### Return type

[**ProcessCollection1**](ProcessCollection1.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="deleteEvent"></a>
# **deleteEvent**
> ResultSuccess deleteEvent(processId, eventId)



This method deletes an event using the event ID and process ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var processId = "processId_example"; // String | Process ID

var eventId = "eventId_example"; // String | ID of the event to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteEvent(processId, eventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| Process ID | 
 **eventId** | **String**| ID of the event to delete | 

### Return type

[**ResultSuccess**](ResultSuccess.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="deleteEventConnector"></a>
# **deleteEventConnector**
> ResultSuccess deleteEventConnector(processId, eventId, connectorId)



This method is for deleting a single event connector based on event ID, process ID and Connector ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var processId = "processId_example"; // String | ID of the process item

var eventId = "eventId_example"; // String | ID of item to fetch

var connectorId = "connectorId_example"; // String | ID of EventConnector to fetch


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteEventConnector(processId, eventId, connectorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process item | 
 **eventId** | **String**| ID of item to fetch | 
 **connectorId** | **String**| ID of EventConnector to fetch | 

### Return type

[**ResultSuccess**](ResultSuccess.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="deleteFlow"></a>
# **deleteFlow**
> ResultSuccess deleteFlow(processId, flowId)



This method deletes the Sequence Flow using the flow ID and the process ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var processId = "processId_example"; // String | Process ID

var flowId = "flowId_example"; // String | ID of the flow to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteFlow(processId, flowId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| Process ID | 
 **flowId** | **String**| ID of the flow to delete | 

### Return type

[**ResultSuccess**](ResultSuccess.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="deleteGateway"></a>
# **deleteGateway**
> ResultSuccess deleteGateway(processId, gatewayId)



This method deletes a single item using the gateway ID and the process ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var processId = "processId_example"; // String | Process ID

var gatewayId = "gatewayId_example"; // String | ID of the process to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteGateway(processId, gatewayId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| Process ID | 
 **gatewayId** | **String**| ID of the process to delete | 

### Return type

[**ResultSuccess**](ResultSuccess.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="deleteGroup"></a>
# **deleteGroup**
> ResultSuccess deleteGroup(id)



This method deletes a group using the group ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var id = "id_example"; // String | ID of group to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteGroup(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of group to delete | 

### Return type

[**ResultSuccess**](ResultSuccess.md)

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

var apiInstance = new PMIO.Client();

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

var apiInstance = new PMIO.Client();

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

<a name="deleteOauthClient"></a>
# **deleteOauthClient**
> ResultSuccess deleteOauthClient(userId, clientId)



This method deletes an Oauth client using the Oauth client and user IDs.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var userId = "userId_example"; // String | User ID

var clientId = "clientId_example"; // String | ID of Oauth client to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteOauthClient(userId, clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User ID | 
 **clientId** | **String**| ID of Oauth client to delete | 

### Return type

[**ResultSuccess**](ResultSuccess.md)

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

var apiInstance = new PMIO.Client();

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

var apiInstance = new PMIO.Client();

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

var apiInstance = new PMIO.Client();

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

<a name="deleteUser"></a>
# **deleteUser**
> ResultSuccess deleteUser(id)



This method deletes a user from the system.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var id = "id_example"; // String | ID of user to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteUser(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of user to delete | 

### Return type

[**ResultSuccess**](ResultSuccess.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="eventTrigger"></a>
# **eventTrigger**
> DataModelItem1 eventTrigger(processId, eventId, triggerEventCreateItem)



This method starts/triggers an event.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var processId = "processId_example"; // String | Process ID related to the event

var eventId = "eventId_example"; // String | ID of the event to trigger

var triggerEventCreateItem = new PMIO.TriggerEventCreateItem(); // TriggerEventCreateItem | Json with some parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventTrigger(processId, eventId, triggerEventCreateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| Process ID related to the event | 
 **eventId** | **String**| ID of the event to trigger | 
 **triggerEventCreateItem** | [**TriggerEventCreateItem**](TriggerEventCreateItem.md)| Json with some parameters | 

### Return type

[**DataModelItem1**](DataModelItem1.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="eventWebhook"></a>
# **eventWebhook**
> &#39;String&#39; eventWebhook(processId, eventId, opts)



This webhook method triggers a given event object.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var processId = "processId_example"; // String | Process ID related to the event

var eventId = "eventId_example"; // String | ID of the event to trigger

var opts = { 
  'anyVariable': "anyVariable_example" // String | Any POST or GET variable will be passed to the newly created DataModel
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventWebhook(processId, eventId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| Process ID related to the event | 
 **eventId** | **String**| ID of the event to trigger | 
 **anyVariable** | **String**| Any POST or GET variable will be passed to the newly created DataModel | [optional] 

### Return type

**&#39;String&#39;**

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

var apiInstance = new PMIO.Client();

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

<a name="findEventById"></a>
# **findEventById**
> EventItem findEventById(processId, eventId)



This method retrieves an event using its ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var processId = "processId_example"; // String | ID of the process to return

var eventId = "eventId_example"; // String | ID of the event to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findEventById(processId, eventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process to return | 
 **eventId** | **String**| ID of the event to return | 

### Return type

[**EventItem**](EventItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findEventConnectorById"></a>
# **findEventConnectorById**
> EventConnector1 findEventConnectorById(processId, eventId, connectorId)



This method returns all event connectors related to the run process and event.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var processId = "processId_example"; // String | ID of the process to fetch

var eventId = "eventId_example"; // String | ID of Event to fetch

var connectorId = "connectorId_example"; // String | ID of EventConnector to fetch


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findEventConnectorById(processId, eventId, connectorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process to fetch | 
 **eventId** | **String**| ID of Event to fetch | 
 **connectorId** | **String**| ID of EventConnector to fetch | 

### Return type

[**EventConnector1**](EventConnector1.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findFlowById"></a>
# **findFlowById**
> FlowItem findFlowById(processId, flowId)



This method retrieves a flow based on its ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var processId = "processId_example"; // String | ID of the process to return

var flowId = "flowId_example"; // String | ID of the flow to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findFlowById(processId, flowId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process to return | 
 **flowId** | **String**| ID of the flow to return | 

### Return type

[**FlowItem**](FlowItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findGatewayById"></a>
# **findGatewayById**
> GatewayItem findGatewayById(processId, gatewayId)



This method retrieves a gateway based on its ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var processId = "processId_example"; // String | ID of the process to return

var gatewayId = "gatewayId_example"; // String | ID of gateway to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findGatewayById(processId, gatewayId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process to return | 
 **gatewayId** | **String**| ID of gateway to return | 

### Return type

[**GatewayItem**](GatewayItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findGroupById"></a>
# **findGroupById**
> GroupItem findGroupById(id)



This method retrieves a group using its ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var id = "id_example"; // String | ID of group to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findGroupById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of group to return | 

### Return type

[**GroupItem**](GroupItem.md)

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

var apiInstance = new PMIO.Client();

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

var apiInstance = new PMIO.Client();

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

<a name="findOauthClientById"></a>
# **findOauthClientById**
> OauthClientItem findOauthClientById(userId, clientId)



This method retrieves an Oauth client for the User based on its ID.  The response contains the &#x60;client_secret&#x60; required to obtain the &#x60;access_token&#x60;.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var userId = "userId_example"; // String | ID of user to retrieve

var clientId = "clientId_example"; // String | ID of Oauth client to retrieve


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findOauthClientById(userId, clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| ID of user to retrieve | 
 **clientId** | **String**| ID of Oauth client to retrieve | 

### Return type

[**OauthClientItem**](OauthClientItem.md)

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

var apiInstance = new PMIO.Client();

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

var apiInstance = new PMIO.Client();

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

var apiInstance = new PMIO.Client();

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

<a name="findTaskInstanceById"></a>
# **findTaskInstanceById**
> InlineResponse2001 findTaskInstanceById(taskInstanceId, opts)



This method retrieves a task instance based on its ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findUserById"></a>
# **findUserById**
> UserItem findUserById(id)



This method returns a user using its ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var id = "id_example"; // String | ID of the user to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findUserById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the user to return | 

### Return type

[**UserItem**](UserItem.md)

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

var apiInstance = new PMIO.Client();

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

var apiInstance = new PMIO.Client();

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

<a name="listEventConnectors"></a>
# **listEventConnectors**
> EventConnectorsCollection listEventConnectors(processId, eventId, opts)



This method returns all event connectors related to the run process and Event.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var processId = "processId_example"; // String | ID of the process to fetch

var eventId = "eventId_example"; // String | ID of the task to fetch

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
apiInstance.listEventConnectors(processId, eventId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process to fetch | 
 **eventId** | **String**| ID of the task to fetch | 
 **page** | **Integer**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Integer**| Amount of items per page | [optional] [default to 15]

### Return type

[**EventConnectorsCollection**](EventConnectorsCollection.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="listEvents"></a>
# **listEvents**
> EventCollection listEvents(processId, opts)



This method returns all events related to the running process.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var processId = "processId_example"; // String | ID of the process related to the event

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
apiInstance.listEvents(processId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process related to the event | 
 **page** | **Integer**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Integer**| Amount of items per page | [optional] [default to 15]

### Return type

[**EventCollection**](EventCollection.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="listFlows"></a>
# **listFlows**
> FlowCollection listFlows(processId, opts)



This method retrieves all existing flows.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var processId = "processId_example"; // String | ID of the process related to the flow

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
apiInstance.listFlows(processId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process related to the flow | 
 **page** | **Integer**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Integer**| Amount of items per page | [optional] [default to 15]

### Return type

[**FlowCollection**](FlowCollection.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="listGateways"></a>
# **listGateways**
> GatewayCollection listGateways(processId, opts)



This method retrieves all existing gateways.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var processId = "processId_example"; // String | ID of the process related to the gateway

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
apiInstance.listGateways(processId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process related to the gateway | 
 **page** | **Integer**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Integer**| Amount of items per page | [optional] [default to 15]

### Return type

[**GatewayCollection**](GatewayCollection.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="listGroups"></a>
# **listGroups**
> GroupCollection listGroups(opts)



This method retrieves all existing groups.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

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
apiInstance.listGroups(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Integer**| Amount of items per page | [optional] [default to 15]

### Return type

[**GroupCollection**](GroupCollection.md)

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

var apiInstance = new PMIO.Client();

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

var apiInstance = new PMIO.Client();

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

<a name="listLogs"></a>
# **listLogs**
> ListLogCollection listLogs(opts)



This method retrieves all existing logs.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var opts = { 
  'search': "search_example", // String | The string to search in logs.
  'order': "order_example", // String | The order of retrieved list.
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
apiInstance.listLogs(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| The string to search in logs. | [optional] 
 **order** | **String**| The order of retrieved list. | [optional] 
 **page** | **Integer**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Integer**| Amount of items per page | [optional] [default to 15]

### Return type

[**ListLogCollection**](ListLogCollection.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="listOauthClients"></a>
# **listOauthClients**
> OauthClientCollection listOauthClients(userId, opts)



This method retrieves all existing Oauth clients belonging to a user.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var userId = "userId_example"; // String | User ID related to the Oauth clients

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
apiInstance.listOauthClients(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User ID related to the Oauth clients | 
 **page** | **Integer**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Integer**| Amount of items per page | [optional] [default to 15]

### Return type

[**OauthClientCollection**](OauthClientCollection.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="listProcesses"></a>
# **listProcesses**
> ProcessCollection listProcesses(opts)



This method retrieves all existing processes.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

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
apiInstance.listProcesses(opts, callback);
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

<a name="listTaskConnectors"></a>
# **listTaskConnectors**
> TaskConnectorsCollection listTaskConnectors(processId, taskId, opts)



This method returns all task connectors related to the run process and task.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

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
apiInstance.listTaskConnectors(processId, taskId, opts, callback);
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

<a name="listTaskInstances"></a>
# **listTaskInstances**
> TaskInstanceCollection listTaskInstances(opts)



This method retrieves all existing task instances.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

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
apiInstance.listTaskInstances(opts, callback);
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

var apiInstance = new PMIO.Client();

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

var apiInstance = new PMIO.Client();

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

var apiInstance = new PMIO.Client();

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

<a name="listTasks"></a>
# **listTasks**
> TaskCollection listTasks(processId, opts)



This method is intended for returning a list of all tasks related to the process.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

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
apiInstance.listTasks(processId, opts, callback);
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

<a name="listTokens"></a>
# **listTokens**
> TokenCollection listTokens(processId, instanceId, opts)



This method retrieves tokens related to the process and instance using the process and instance IDs

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

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
apiInstance.listTokens(processId, instanceId, opts, callback);
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

<a name="listUsers"></a>
# **listUsers**
> UserCollection listUsers(opts)



This method returns all existing users in the system.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

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
apiInstance.listUsers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Integer**| Amount of items per page | [optional] [default to 15]

### Return type

[**UserCollection**](UserCollection.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="logSummary"></a>
# **logSummary**
> InlineResponse200 logSummary(opts)



This method retrieves all existing logs by action and period.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var opts = { 
  'action': "action_example", // String | The action to search in logs.
  'dateFrom': "dateFrom_example", // String | Start date for retrieved list.
  'dateTo': "dateTo_example", // String | End date for retrieved list.
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
apiInstance.logSummary(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **action** | **String**| The action to search in logs. | [optional] 
 **dateFrom** | **String**| Start date for retrieved list. | [optional] 
 **dateTo** | **String**| End date for retrieved list. | [optional] 
 **page** | **Integer**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Integer**| Amount of items per page | [optional] [default to 15]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="myselfUser"></a>
# **myselfUser**
> UserItem myselfUser(opts)



This method returns user information using a token.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

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
apiInstance.myselfUser(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Integer**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Integer**| Amount of items per page | [optional] [default to 15]

### Return type

[**UserItem**](UserItem.md)

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

var apiInstance = new PMIO.Client();

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

<a name="removeUsersFromGroup"></a>
# **removeUsersFromGroup**
> ResultSuccess removeUsersFromGroup(id, groupRemoveUsersItem)



This method removes one or more users from a group.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var id = "id_example"; // String | ID of group to be modified

var groupRemoveUsersItem = new PMIO.GroupRemoveUsersItem(); // GroupRemoveUsersItem | JSON API response with Users IDs to remove


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeUsersFromGroup(id, groupRemoveUsersItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of group to be modified | 
 **groupRemoveUsersItem** | [**GroupRemoveUsersItem**](GroupRemoveUsersItem.md)| JSON API response with Users IDs to remove | 

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

var apiInstance = new PMIO.Client();

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

<a name="syncUsersToGroup"></a>
# **syncUsersToGroup**
> ResultSuccess syncUsersToGroup(id, groupSyncUsersItem)



This method synchronizes one or more users with a group.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var id = "id_example"; // String | ID of group to be modified

var groupSyncUsersItem = new PMIO.GroupSyncUsersItem(); // GroupSyncUsersItem | JSON API with array of users IDs to sync


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.syncUsersToGroup(id, groupSyncUsersItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of group to be modified | 
 **groupSyncUsersItem** | [**GroupSyncUsersItem**](GroupSyncUsersItem.md)| JSON API with array of users IDs to sync | 

### Return type

[**ResultSuccess**](ResultSuccess.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="updateEvent"></a>
# **updateEvent**
> EventItem updateEvent(processId, eventId, eventUpdateItem)



This method updates an existing event.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var processId = "processId_example"; // String | ID of the process to retrieve

var eventId = "eventId_example"; // String | ID of the event to retrieve

var eventUpdateItem = new PMIO.EventUpdateItem(); // EventUpdateItem | Event object to edit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateEvent(processId, eventId, eventUpdateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process to retrieve | 
 **eventId** | **String**| ID of the event to retrieve | 
 **eventUpdateItem** | [**EventUpdateItem**](EventUpdateItem.md)| Event object to edit | 

### Return type

[**EventItem**](EventItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="updateEventConnector"></a>
# **updateEventConnector**
> EventConnector1 updateEventConnector(processId, eventId, connectorId, eventConnectorUpdateItem)



This method updates the existing event connector with new parameter values.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var processId = "processId_example"; // String | ID of the process to fetch

var eventId = "eventId_example"; // String | ID of the event to fetch

var connectorId = "connectorId_example"; // String | ID of the event Connector to fetch

var eventConnectorUpdateItem = new PMIO.EventConnectorUpdateItem(); // EventConnectorUpdateItem | EventConnector object to edit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateEventConnector(processId, eventId, connectorId, eventConnectorUpdateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process to fetch | 
 **eventId** | **String**| ID of the event to fetch | 
 **connectorId** | **String**| ID of the event Connector to fetch | 
 **eventConnectorUpdateItem** | [**EventConnectorUpdateItem**](EventConnectorUpdateItem.md)| EventConnector object to edit | 

### Return type

[**EventConnector1**](EventConnector1.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="updateFlow"></a>
# **updateFlow**
> FlowItem updateFlow(processId, flowId, flowUpdateItem)



This method updates an existing flow.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var processId = "processId_example"; // String | ID of the process to retrieve

var flowId = "flowId_example"; // String | ID of the flow to retrieve

var flowUpdateItem = new PMIO.FlowUpdateItem(); // FlowUpdateItem | Flow object to edit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateFlow(processId, flowId, flowUpdateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process to retrieve | 
 **flowId** | **String**| ID of the flow to retrieve | 
 **flowUpdateItem** | [**FlowUpdateItem**](FlowUpdateItem.md)| Flow object to edit | 

### Return type

[**FlowItem**](FlowItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="updateGateway"></a>
# **updateGateway**
> GatewayItem updateGateway(processId, gatewayId, gatewayUpdateItem)



This method updates an existing gateway.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var processId = "processId_example"; // String | ID of the process to retrieve

var gatewayId = "gatewayId_example"; // String | ID of the gateway to retrieve

var gatewayUpdateItem = new PMIO.GatewayUpdateItem(); // GatewayUpdateItem | Gateway object to edit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateGateway(processId, gatewayId, gatewayUpdateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of the process to retrieve | 
 **gatewayId** | **String**| ID of the gateway to retrieve | 
 **gatewayUpdateItem** | [**GatewayUpdateItem**](GatewayUpdateItem.md)| Gateway object to edit | 

### Return type

[**GatewayItem**](GatewayItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="updateGroup"></a>
# **updateGroup**
> GroupItem updateGroup(id, groupUpdateItem)



This method updates an existing group.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var id = "id_example"; // String | ID of group to retrieve

var groupUpdateItem = new PMIO.GroupUpdateItem(); // GroupUpdateItem | Group object to edit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateGroup(id, groupUpdateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of group to retrieve | 
 **groupUpdateItem** | [**GroupUpdateItem**](GroupUpdateItem.md)| Group object to edit | 

### Return type

[**GroupItem**](GroupItem.md)

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

var apiInstance = new PMIO.Client();

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

var apiInstance = new PMIO.Client();

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

<a name="updateOauthClient"></a>
# **updateOauthClient**
> OauthClientItem updateOauthClient(userId, clientId, oauthClientUpdateItem)



This method updates an existing Oauth client.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var userId = "userId_example"; // String | ID of user to retrieve

var clientId = "clientId_example"; // String | ID of Oauth client to retrieve

var oauthClientUpdateItem = new PMIO.OauthClientUpdateItem(); // OauthClientUpdateItem | Oauth Client object to edit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOauthClient(userId, clientId, oauthClientUpdateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| ID of user to retrieve | 
 **clientId** | **String**| ID of Oauth client to retrieve | 
 **oauthClientUpdateItem** | [**OauthClientUpdateItem**](OauthClientUpdateItem.md)| Oauth Client object to edit | 

### Return type

[**OauthClientItem**](OauthClientItem.md)

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

var apiInstance = new PMIO.Client();

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

var apiInstance = new PMIO.Client();

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

var apiInstance = new PMIO.Client();

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
> InlineResponse2001 updateTaskInstance(taskInstanceId, taskInstanceUpdateItem)



This method updates an existing task instance.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="updateUser"></a>
# **updateUser**
> UserItem updateUser(id, userUpdateItem)



This method updates an existing user.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Client();

var id = "id_example"; // String | ID of user to retrieve

var userUpdateItem = new PMIO.UserUpdateItem(); // UserUpdateItem | User object for update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUser(id, userUpdateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of user to retrieve | 
 **userUpdateItem** | [**UserUpdateItem**](UserUpdateItem.md)| User object for update | 

### Return type

[**UserItem**](UserItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

