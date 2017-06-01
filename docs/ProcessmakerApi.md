# PMIO.ProcessmakerApi

All URIs are relative to *https://CHANGEME.api.processmaker.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addClient**](ProcessmakerApi.md#addClient) | **POST** /users/{user_id}/clients | 
[**addEvent**](ProcessmakerApi.md#addEvent) | **POST** /processes/{process_id}/events | 
[**addEventConnector**](ProcessmakerApi.md#addEventConnector) | **POST** /processes/{process_id}/events/{event_id}/connectors | 
[**addFlow**](ProcessmakerApi.md#addFlow) | **POST** /processes/{process_id}/flows | 
[**addGateway**](ProcessmakerApi.md#addGateway) | **POST** /processes/{process_id}/gateways | 
[**addGroup**](ProcessmakerApi.md#addGroup) | **POST** /groups | 
[**addGroupsToTask**](ProcessmakerApi.md#addGroupsToTask) | **PUT** /processes/{process_id}/tasks/{task_id}/groups | 
[**addInputOutput**](ProcessmakerApi.md#addInputOutput) | **POST** /processes/{process_id}/tasks/{task_id}/inputoutput | 
[**addInstance**](ProcessmakerApi.md#addInstance) | **POST** /processes/{process_id}/instances | 
[**addProcess**](ProcessmakerApi.md#addProcess) | **POST** /processes | 
[**addTask**](ProcessmakerApi.md#addTask) | **POST** /processes/{process_id}/tasks | 
[**addTaskConnector**](ProcessmakerApi.md#addTaskConnector) | **POST** /processes/{process_id}/tasks/{task_id}/connectors | 
[**addUser**](ProcessmakerApi.md#addUser) | **POST** /users | 
[**addUsersToGroup**](ProcessmakerApi.md#addUsersToGroup) | **PUT** /groups/{id}/users | 
[**deleteClient**](ProcessmakerApi.md#deleteClient) | **DELETE** /users/{user_id}/clients/{client_id} | 
[**deleteEvent**](ProcessmakerApi.md#deleteEvent) | **DELETE** /processes/{process_id}/events/{event_id} | 
[**deleteEventConnector**](ProcessmakerApi.md#deleteEventConnector) | **DELETE** /processes/{process_id}/events/{event_id}/connectors/{connector_id} | 
[**deleteFlow**](ProcessmakerApi.md#deleteFlow) | **DELETE** /processes/{process_id}/flows/{flow_id} | 
[**deleteGateway**](ProcessmakerApi.md#deleteGateway) | **DELETE** /processes/{process_id}/gateways/{gateway_id} | 
[**deleteGroup**](ProcessmakerApi.md#deleteGroup) | **DELETE** /groups/{id} | 
[**deleteInputOutput**](ProcessmakerApi.md#deleteInputOutput) | **DELETE** /processes/{process_id}/tasks/{task_id}/inputoutput/{inputoutput_uid} | 
[**deleteInstance**](ProcessmakerApi.md#deleteInstance) | **DELETE** /processes/{process_id}/instances/{instance_id} | 
[**deleteProcess**](ProcessmakerApi.md#deleteProcess) | **DELETE** /processes/{id} | 
[**deleteTask**](ProcessmakerApi.md#deleteTask) | **DELETE** /processes/{process_id}/tasks/{task_id} | 
[**deleteTaskConnector**](ProcessmakerApi.md#deleteTaskConnector) | **DELETE** /processes/{process_id}/tasks/{task_id}/connectors/{connector_id} | 
[**deleteUser**](ProcessmakerApi.md#deleteUser) | **DELETE** /users/{id} | 
[**eventTrigger**](ProcessmakerApi.md#eventTrigger) | **POST** /processes/{process_id}/events/{event_id}/trigger | 
[**findClientById**](ProcessmakerApi.md#findClientById) | **GET** /users/{user_id}/clients/{client_id} | 
[**findClients**](ProcessmakerApi.md#findClients) | **GET** /users/{user_id}/clients | 
[**findDataModel**](ProcessmakerApi.md#findDataModel) | **GET** /processes/{process_id}/instances/{instance_id}/datamodel | 
[**findEventById**](ProcessmakerApi.md#findEventById) | **GET** /processes/{process_id}/events/{event_id} | 
[**findEventConnectorById**](ProcessmakerApi.md#findEventConnectorById) | **GET** /processes/{process_id}/events/{event_id}/connectors/{connector_id} | 
[**findEventConnectors**](ProcessmakerApi.md#findEventConnectors) | **GET** /processes/{process_id}/events/{event_id}/connectors | 
[**findEvents**](ProcessmakerApi.md#findEvents) | **GET** /processes/{process_id}/events | 
[**findFlowById**](ProcessmakerApi.md#findFlowById) | **GET** /processes/{process_id}/flows/{flow_id} | 
[**findFlows**](ProcessmakerApi.md#findFlows) | **GET** /processes/{process_id}/flows | 
[**findGatewayById**](ProcessmakerApi.md#findGatewayById) | **GET** /processes/{process_id}/gateways/{gateway_id} | 
[**findGateways**](ProcessmakerApi.md#findGateways) | **GET** /processes/{process_id}/gateways | 
[**findGroupById**](ProcessmakerApi.md#findGroupById) | **GET** /groups/{id} | 
[**findGroups**](ProcessmakerApi.md#findGroups) | **GET** /groups | 
[**findInputOutputById**](ProcessmakerApi.md#findInputOutputById) | **GET** /processes/{process_id}/tasks/{task_id}/inputoutput/{inputoutput_uid} | 
[**findInputOutputs**](ProcessmakerApi.md#findInputOutputs) | **GET** /processes/{process_id}/tasks/{task_id}/inputoutput | 
[**findInstanceById**](ProcessmakerApi.md#findInstanceById) | **GET** /processes/{process_id}/instances/{instance_id} | 
[**findInstances**](ProcessmakerApi.md#findInstances) | **GET** /processes/{process_id}/instances | 
[**findProcessById**](ProcessmakerApi.md#findProcessById) | **GET** /processes/{id} | 
[**findProcesses**](ProcessmakerApi.md#findProcesses) | **GET** /processes | 
[**findTaskById**](ProcessmakerApi.md#findTaskById) | **GET** /processes/{process_id}/tasks/{task_id} | 
[**findTaskConnectorById**](ProcessmakerApi.md#findTaskConnectorById) | **GET** /processes/{process_id}/tasks/{task_id}/connectors/{connector_id} | 
[**findTaskConnectors**](ProcessmakerApi.md#findTaskConnectors) | **GET** /processes/{process_id}/tasks/{task_id}/connectors | 
[**findTaskInstanceById**](ProcessmakerApi.md#findTaskInstanceById) | **GET** /task_instances/{task_instance_id} | 
[**findTaskInstances**](ProcessmakerApi.md#findTaskInstances) | **GET** /task_instances | 
[**findTasks**](ProcessmakerApi.md#findTasks) | **GET** /processes/{process_id}/tasks | 
[**findUserById**](ProcessmakerApi.md#findUserById) | **GET** /users/{id} | 
[**findUsers**](ProcessmakerApi.md#findUsers) | **GET** /users | 
[**importBpmnFile**](ProcessmakerApi.md#importBpmnFile) | **POST** /processes/import | 
[**myselfUser**](ProcessmakerApi.md#myselfUser) | **GET** /users/myself | 
[**removeGroupsFromTask**](ProcessmakerApi.md#removeGroupsFromTask) | **DELETE** /processes/{process_id}/tasks/{task_id}/groups | 
[**removeUsersFromGroup**](ProcessmakerApi.md#removeUsersFromGroup) | **DELETE** /groups/{id}/users | 
[**syncGroupsToTask**](ProcessmakerApi.md#syncGroupsToTask) | **POST** /processes/{process_id}/tasks/{task_id}/groups | 
[**syncUsersToGroup**](ProcessmakerApi.md#syncUsersToGroup) | **POST** /groups/{id}/users | 
[**updateClient**](ProcessmakerApi.md#updateClient) | **PUT** /users/{user_id}/clients/{client_id} | 
[**updateEvent**](ProcessmakerApi.md#updateEvent) | **PUT** /processes/{process_id}/events/{event_id} | 
[**updateEventConnector**](ProcessmakerApi.md#updateEventConnector) | **PUT** /processes/{process_id}/events/{event_id}/connectors/{connector_id} | 
[**updateFlow**](ProcessmakerApi.md#updateFlow) | **PUT** /processes/{process_id}/flows/{flow_id} | 
[**updateGateway**](ProcessmakerApi.md#updateGateway) | **PUT** /processes/{process_id}/gateways/{gateway_id} | 
[**updateGroup**](ProcessmakerApi.md#updateGroup) | **PUT** /groups/{id} | 
[**updateInputOutput**](ProcessmakerApi.md#updateInputOutput) | **PUT** /processes/{process_id}/tasks/{task_id}/inputoutput/{inputoutput_uid} | 
[**updateInstance**](ProcessmakerApi.md#updateInstance) | **PUT** /processes/{process_id}/instances/{instance_id} | 
[**updateProcess**](ProcessmakerApi.md#updateProcess) | **PUT** /processes/{id} | 
[**updateTask**](ProcessmakerApi.md#updateTask) | **PUT** /processes/{process_id}/tasks/{task_id} | 
[**updateTaskConnector**](ProcessmakerApi.md#updateTaskConnector) | **PUT** /processes/{process_id}/tasks/{task_id}/connectors/{connector_id} | 
[**updateTaskInstance**](ProcessmakerApi.md#updateTaskInstance) | **PATCH** /task_instances/{task_instance_id} | 
[**updateUser**](ProcessmakerApi.md#updateUser) | **PUT** /users/{id} | 


<a name="addClient"></a>
# **addClient**
> ClientItem addClient(userId, clientCreateItem)



This method creates a new Oauth client for the user

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var userId = "userId_example"; // String | ID of the user related to the Oauth client

var clientCreateItem = new PMIO.ClientCreateItem(); // ClientCreateItem | JSON API with the Oauth Client object to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addClient(userId, clientCreateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| ID of the user related to the Oauth client | 
 **clientCreateItem** | [**ClientCreateItem**](ClientCreateItem.md)| JSON API with the Oauth Client object to add | 

### Return type

[**ClientItem**](ClientItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

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

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of the process related to the event

var eventCreateItem = new PMIO.EventCreateItem(); // EventCreateItem | JSON API response with the Event object to add


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
 **eventCreateItem** | [**EventCreateItem**](EventCreateItem.md)| JSON API response with the Event object to add | 

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



This method is intended for creating a new Event connector.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of Process to fetch

var eventId = "eventId_example"; // String | ID of Event to fetch

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
 **processId** | **String**| ID of Process to fetch | 
 **eventId** | **String**| ID of Event to fetch | 
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



This method creates a new Sequence flow

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

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

var apiInstance = new PMIO.ProcessmakerApi();

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

var apiInstance = new PMIO.ProcessmakerApi();

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



This method assigns group(s) to the choosen task

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | Process ID

var taskId = "taskId_example"; // String | ID of task to be modified

var taskAddGroupsItem = new PMIO.TaskAddGroupsItem(); // TaskAddGroupsItem | JSON API with Groups ID's to add


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
 **taskId** | **String**| ID of task to be modified | 
 **taskAddGroupsItem** | [**TaskAddGroupsItem**](TaskAddGroupsItem.md)| JSON API with Groups ID&#39;s to add | 

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



This method creates a new Input/Output object

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

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

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | Process ID related to the nstance

var instanceCreateItem = new PMIO.InstanceCreateItem(); // InstanceCreateItem | JSON API response with the Instance object to add


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
 **processId** | **String**| Process ID related to the nstance | 
 **instanceCreateItem** | [**InstanceCreateItem**](InstanceCreateItem.md)| JSON API response with the Instance object to add | 

### Return type

[**InstanceItem**](InstanceItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="addProcess"></a>
# **addProcess**
> ProcessItem addProcess(processCreateItem)



This method creates a new process

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processCreateItem = new PMIO.ProcessCreateItem(); // ProcessCreateItem | JSON API response with the Process object to add


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
 **processCreateItem** | [**ProcessCreateItem**](ProcessCreateItem.md)| JSON API response with the Process object to add | 

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

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | Process ID related to the task

var taskCreateItem = new PMIO.TaskCreateItem(); // TaskCreateItem | JSON API with the Task object to add


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
 **taskCreateItem** | [**TaskCreateItem**](TaskCreateItem.md)| JSON API with the Task object to add | 

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



This method is intended for creating a new task connector.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of Process to fetch

var taskId = "taskId_example"; // String | ID of Task to fetch

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
 **processId** | **String**| ID of Process to fetch | 
 **taskId** | **String**| ID of Task to fetch | 
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
> UserItem addUser(userCreateItem)



This method creates a new user in the system.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var userCreateItem = new PMIO.UserCreateItem(); // UserCreateItem | JSON API with the User object to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addUser(userCreateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCreateItem** | [**UserCreateItem**](UserCreateItem.md)| JSON API with the User object to add | 

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

var apiInstance = new PMIO.ProcessmakerApi();

var id = "id_example"; // String | ID of group to be modified

var groupAddUsersItem = new PMIO.GroupAddUsersItem(); // GroupAddUsersItem | JSON API response with array of users ID's


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
 **groupAddUsersItem** | [**GroupAddUsersItem**](GroupAddUsersItem.md)| JSON API response with array of users ID&#39;s | 

### Return type

[**ResultSuccess**](ResultSuccess.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="deleteClient"></a>
# **deleteClient**
> ResultSuccess deleteClient(userId, clientId)



This method deletes an Oauth client using the client and user IDs.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var userId = "userId_example"; // String | User ID

var clientId = "clientId_example"; // String | ID of client to delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteClient(userId, clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User ID | 
 **clientId** | **String**| ID of client to delete | 

### Return type

[**ResultSuccess**](ResultSuccess.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="deleteEvent"></a>
# **deleteEvent**
> ResultSuccess deleteEvent(processId, eventId)



This method deletes an event using the event ID and process ID

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | Process ID

var eventId = "eventId_example"; // String | ID of event to delete


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
 **eventId** | **String**| ID of event to delete | 

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



This method is intended for deleting a single Event connector based on Event ID, Process ID and Connector ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of of Process item

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
 **processId** | **String**| ID of of Process item | 
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



This method deletes a sequence flow using the flow ID and process ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | Process ID

var flowId = "flowId_example"; // String | ID of flow to delete


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
 **flowId** | **String**| ID of flow to delete | 

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



This method is deletes a single item using the gateway ID and process ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | Process ID

var gatewayId = "gatewayId_example"; // String | ID of Process to delete


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
 **gatewayId** | **String**| ID of Process to delete | 

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



This method deletes a group using the group ID

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

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

var apiInstance = new PMIO.ProcessmakerApi();

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



This method deletes an instance using the instance ID and process ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | Process ID

var instanceId = "instanceId_example"; // String | ID of instance to delete


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
 **instanceId** | **String**| ID of instance to delete | 

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

var apiInstance = new PMIO.ProcessmakerApi();

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



This method deletes a task using the task ID and process ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | Process ID

var taskId = "taskId_example"; // String | ID of task to delete


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
 **taskId** | **String**| ID of task to delete | 

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



This method is intended for deleting a single Task connector based on Task ID, Process ID and Connector ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of Process item to fetch

var taskId = "taskId_example"; // String | ID of Task item to fetch

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
 **processId** | **String**| ID of Process item to fetch | 
 **taskId** | **String**| ID of Task item to fetch | 
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

var apiInstance = new PMIO.ProcessmakerApi();

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

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | Process ID related to the event

var eventId = "eventId_example"; // String | ID of event to trigger

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
 **eventId** | **String**| ID of event to trigger | 
 **triggerEventCreateItem** | [**TriggerEventCreateItem**](TriggerEventCreateItem.md)| Json with some parameters | 

### Return type

[**DataModelItem1**](DataModelItem1.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findClientById"></a>
# **findClientById**
> ClientItem findClientById(userId, clientId)



This method is retrieves an Oauth client based on its ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var userId = "userId_example"; // String | ID of user to retrieve

var clientId = "clientId_example"; // String | ID of client to retrieve


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findClientById(userId, clientId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| ID of user to retrieve | 
 **clientId** | **String**| ID of client to retrieve | 

### Return type

[**ClientItem**](ClientItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findClients"></a>
# **findClients**
> ClientCollection findClients(userId, opts)



This method retrieves all existing clients belonging to an user.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var userId = "userId_example"; // String | User ID related to the clients

var opts = { 
  'pagefindProcessById': 1, // Number | Page numbers to fetch
  'perPage': 15 // Number | Amount of items per page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findClients(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| User ID related to the clients | 
 **pagefindProcessById** | **Number**| Page numbers to fetch | [optional] [default to 1]
 **perPage** | **Number**| Amount of items per page | [optional] [default to 15]

### Return type

[**ClientCollection**](ClientCollection.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findDataModel"></a>
# **findDataModel**
> DataModelItem1 findDataModel(processId, instanceId, opts)



This method returns the instance DataModel and lets the user work with it directly

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of process to return

var instanceId = "instanceId_example"; // String | ID of instance to return

var opts = { 
  'page': 1, // Number | Page number to fetch
  'perPage': 15 // Number | Amount of items per Page
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
 **processId** | **String**| ID of process to return | 
 **instanceId** | **String**| ID of instance to return | 
 **page** | **Number**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Number**| Amount of items per Page | [optional] [default to 15]

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

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of process to return

var eventId = "eventId_example"; // String | ID of event to return


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
 **processId** | **String**| ID of process to return | 
 **eventId** | **String**| ID of event to return | 

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



This method returns all Event connectors related to the run Process and Event.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of Process to fetch

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
 **processId** | **String**| ID of Process to fetch | 
 **eventId** | **String**| ID of Event to fetch | 
 **connectorId** | **String**| ID of EventConnector to fetch | 

### Return type

[**EventConnector1**](EventConnector1.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findEventConnectors"></a>
# **findEventConnectors**
> EventConnectorsCollection findEventConnectors(processId, eventId, opts)



This method returns all Event connectors related to the run Process and Event.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of Process to fetch

var eventId = "eventId_example"; // String | ID of Task to fetch

var opts = { 
  'page': 1, // Number | Page number to fetch
  'perPage': 15 // Number | Amount of items per Page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findEventConnectors(processId, eventId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of Process to fetch | 
 **eventId** | **String**| ID of Task to fetch | 
 **page** | **Number**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Number**| Amount of items per Page | [optional] [default to 15]

### Return type

[**EventConnectorsCollection**](EventConnectorsCollection.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findEvents"></a>
# **findEvents**
> EventCollection findEvents(processId, opts)



This method returns all events related to the runned process

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of process related to the event

var opts = { 
  'page': 1, // Number | Page numbers to fetch
  'perPage': 15 // Number | Amount of items per Page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findEvents(processId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of process related to the event | 
 **page** | **Number**| Page numbers to fetch | [optional] [default to 1]
 **perPage** | **Number**| Amount of items per Page | [optional] [default to 15]

### Return type

[**EventCollection**](EventCollection.md)

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

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of process to return

var flowId = "flowId_example"; // String | ID of flow to return


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
 **processId** | **String**| ID of process to return | 
 **flowId** | **String**| ID of flow to return | 

### Return type

[**FlowItem**](FlowItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findFlows"></a>
# **findFlows**
> FlowCollection findFlows(processId, opts)



This method retrieves all existing flows.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of process related to the flow

var opts = { 
  'page': 1, // Number | Page numbers to fetch
  'perPage': 15 // Number | Amount of items per Page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findFlows(processId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of process related to the flow | 
 **page** | **Number**| Page numbers to fetch | [optional] [default to 1]
 **perPage** | **Number**| Amount of items per Page | [optional] [default to 15]

### Return type

[**FlowCollection**](FlowCollection.md)

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

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of process to return

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
 **processId** | **String**| ID of process to return | 
 **gatewayId** | **String**| ID of gateway to return | 

### Return type

[**GatewayItem**](GatewayItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findGateways"></a>
# **findGateways**
> GatewayCollection findGateways(processId, opts)



This method retrieves all existing gateways.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of process related to the gateway

var opts = { 
  'page': 1, // Number | Page number to fetch
  'perPage': 15 // Number | Amount of items per page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findGateways(processId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| ID of process related to the gateway | 
 **page** | **Number**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Number**| Amount of items per page | [optional] [default to 15]

### Return type

[**GatewayCollection**](GatewayCollection.md)

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

var apiInstance = new PMIO.ProcessmakerApi();

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

<a name="findGroups"></a>
# **findGroups**
> GroupCollection findGroups(opts)



This method retrieves all existing groups.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var opts = { 
  'page': 1, // Number | Page number to fetch
  'perPage': 15 // Number | Amount of items per Page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findGroups(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Number**| Amount of items per Page | [optional] [default to 15]

### Return type

[**GroupCollection**](GroupCollection.md)

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

var apiInstance = new PMIO.ProcessmakerApi();

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

<a name="findInputOutputs"></a>
# **findInputOutputs**
> InputOutputCollection findInputOutputs(processId, taskId, opts)



This method retrieves all existing Input/Output objects in the related task instance.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | Process ID related to Input/Output object

var taskId = "taskId_example"; // String | Task instance ID related to Input/Output object

var opts = { 
  'page': 1, // Number | Page number to fetch
  'perPage': 15 // Number | Amount of items per page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findInputOutputs(processId, taskId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| Process ID related to Input/Output object | 
 **taskId** | **String**| Task instance ID related to Input/Output object | 
 **page** | **Number**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Number**| Amount of items per page | [optional] [default to 15]

### Return type

[**InputOutputCollection**](InputOutputCollection.md)

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

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of process to return

var instanceId = "instanceId_example"; // String | ID of instance to return


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
 **processId** | **String**| ID of process to return | 
 **instanceId** | **String**| ID of instance to return | 

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



This method retrieves related to the process using  the Process ID

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | Process ID related to the instances

var opts = { 
  'page': 1, // Number | Page number to fetch
  'perPage': 15 // Number | Amount of items per page
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
 **page** | **Number**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Number**| Amount of items per page | [optional] [default to 15]

### Return type

[**InstanceCollection**](InstanceCollection.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findProcessById"></a>
# **findProcessById**
> ProcessItem findProcessById(id)



This method retrieves a process using its ID

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var id = "id_example"; // String | ID of process to return


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
 **id** | **String**| ID of process to return | 

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

var apiInstance = new PMIO.ProcessmakerApi();

var opts = { 
  'page': 1, // Number | Page number to fetch
  'perPage': 15 // Number | Amount of items per page
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
 **page** | **Number**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Number**| Amount of items per page | [optional] [default to 15]

### Return type

[**ProcessCollection**](ProcessCollection.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="findTaskById"></a>
# **findTaskById**
> TaskItem findTaskById(processId, taskId)



This method is retrieves a task using its ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of process to return

var taskId = "taskId_example"; // String | ID of task to return


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
 **processId** | **String**| ID of process to return | 
 **taskId** | **String**| ID of task to return | 

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



This method is intended for retrieving an Task connector based on it&#39;s ID.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of Process to fetch

var taskId = "taskId_example"; // String | ID of Task to fetch

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
 **processId** | **String**| ID of Process to fetch | 
 **taskId** | **String**| ID of Task to fetch | 
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



This method returns all Task connectors related to the run Process and Task.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of Process to fetch

var taskId = "taskId_example"; // String | ID of Task to fetch

var opts = { 
  'page': 1, // Number | Page number to fetch
  'perPage': 15 // Number | Amount of items per Page
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
 **processId** | **String**| ID of Process to fetch | 
 **taskId** | **String**| ID of Task to fetch | 
 **page** | **Number**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Number**| Amount of items per Page | [optional] [default to 15]

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

var apiInstance = new PMIO.ProcessmakerApi();

var taskInstanceId = "taskInstanceId_example"; // String | ID of task instance to return

var opts = { 
  'page': 1, // Number | Page number to fetch
  'perPage': 15 // Number | Amount of items per page
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
 **page** | **Number**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Number**| Amount of items per page | [optional] [default to 15]

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



This method retrieves all existing task instances

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var opts = { 
  'page': 1, // Number | Page number to fetch
  'perPage': 15 // Number | Amount of items per page
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
 **page** | **Number**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Number**| Amount of items per page | [optional] [default to 15]

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



This method is intended for returning a list of all Tasks related to the process

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of Process relative to task

var opts = { 
  'page': 1, // Number | Page number to fetch
  'perPage': 15 // Number | Amount of items per Page
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
 **processId** | **String**| ID of Process relative to task | 
 **page** | **Number**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Number**| Amount of items per Page | [optional] [default to 15]

### Return type

[**TaskCollection**](TaskCollection.md)

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

var apiInstance = new PMIO.ProcessmakerApi();

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

<a name="findUsers"></a>
# **findUsers**
> UserCollection findUsers(opts)



This method returs all existing users in the system.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var opts = { 
  'page': 1, // Number | Page number to fetch
  'perPage': 15 // Number | Amount of items per page
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findUsers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Number**| Amount of items per page | [optional] [default to 15]

### Return type

[**UserCollection**](UserCollection.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="importBpmnFile"></a>
# **importBpmnFile**
> ProcessCollection1 importBpmnFile(bpmnImportItem)



This method imports BPMN files. A new process is created when import is successful.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

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

<a name="myselfUser"></a>
# **myselfUser**
> UserItem myselfUser(opts)



This method returns user information using a token

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var opts = { 
  'page': 1, // Number | Page number to fetch
  'perPage': 15 // Number | Amount of items per page
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
 **page** | **Number**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Number**| Amount of items per page | [optional] [default to 15]

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



This method removes groups from a task

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | Process ID

var taskId = "taskId_example"; // String | Task ID

var taskRemoveGroupsItem = new PMIO.TaskRemoveGroupsItem(); // TaskRemoveGroupsItem | JSON API response with Groups IDs to remove


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
 **taskRemoveGroupsItem** | [**TaskRemoveGroupsItem**](TaskRemoveGroupsItem.md)| JSON API response with Groups IDs to remove | 

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

var apiInstance = new PMIO.ProcessmakerApi();

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



This method synchronizes a one or more groups with a task.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | Process ID

var taskId = "taskId_example"; // String | ID of task to modify

var taskSyncGroupsItem = new PMIO.TaskSyncGroupsItem(); // TaskSyncGroupsItem | JSON API response with groups IDs to sync


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
 **taskId** | **String**| ID of task to modify | 
 **taskSyncGroupsItem** | [**TaskSyncGroupsItem**](TaskSyncGroupsItem.md)| JSON API response with groups IDs to sync | 

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

var apiInstance = new PMIO.ProcessmakerApi();

var id = "id_example"; // String | ID of group to be modifieded

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
 **id** | **String**| ID of group to be modifieded | 
 **groupSyncUsersItem** | [**GroupSyncUsersItem**](GroupSyncUsersItem.md)| JSON API with array of users IDs to sync | 

### Return type

[**ResultSuccess**](ResultSuccess.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="updateClient"></a>
# **updateClient**
> ClientItem updateClient(userId, clientId, clientUpdateItem)



This method updates an existing Oauth client.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var userId = "userId_example"; // String | ID of user to retrieve

var clientId = "clientId_example"; // String | ID of client to retrieve

var clientUpdateItem = new PMIO.ClientUpdateItem(); // ClientUpdateItem | Client object to edit


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateClient(userId, clientId, clientUpdateItem, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| ID of user to retrieve | 
 **clientId** | **String**| ID of client to retrieve | 
 **clientUpdateItem** | [**ClientUpdateItem**](ClientUpdateItem.md)| Client object to edit | 

### Return type

[**ClientItem**](ClientItem.md)

### Authorization

[PasswordGrant](../README.md#PasswordGrant)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="updateEvent"></a>
# **updateEvent**
> EventItem updateEvent(processId, eventId, eventUpdateItem)



This method updates an existing event

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of process to retrieve

var eventId = "eventId_example"; // String | ID of event to retrieve

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
 **processId** | **String**| ID of process to retrieve | 
 **eventId** | **String**| ID of event to retrieve | 
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



This method lets update the existing Event connector with new parameters values

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of Process to fetch

var eventId = "eventId_example"; // String | ID of Event to fetch

var connectorId = "connectorId_example"; // String | ID of Event Connector to fetch

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
 **processId** | **String**| ID of Process to fetch | 
 **eventId** | **String**| ID of Event to fetch | 
 **connectorId** | **String**| ID of Event Connector to fetch | 
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

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of process to retrieve

var flowId = "flowId_example"; // String | ID of flow to retrieve

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
 **processId** | **String**| ID of process to retrieve | 
 **flowId** | **String**| ID of flow to retrieve | 
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

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of process to retrieve

var gatewayId = "gatewayId_example"; // String | ID of gateway to retrieve

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
 **processId** | **String**| ID of process to retrieve | 
 **gatewayId** | **String**| ID of gateway to retrieve | 
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

var apiInstance = new PMIO.ProcessmakerApi();

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

var apiInstance = new PMIO.ProcessmakerApi();

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

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of Process to retrieve

var instanceId = "instanceId_example"; // String | ID of Instance to retrieve

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
 **processId** | **String**| ID of Process to retrieve | 
 **instanceId** | **String**| ID of Instance to retrieve | 
 **instanceUpdateItem** | [**InstanceUpdateItem**](InstanceUpdateItem.md)| Instance object to edit | 

### Return type

[**InstanceItem**](InstanceItem.md)

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

var apiInstance = new PMIO.ProcessmakerApi();

var id = "id_example"; // String | ID of process to retrieve

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
 **id** | **String**| ID of process to retrieve | 
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



This method is intended for updating an existing task.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of Process to fetch

var taskId = "taskId_example"; // String | ID of Task to fetch

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
 **processId** | **String**| ID of Process to fetch | 
 **taskId** | **String**| ID of Task to fetch | 
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



This method lets update the existing Task connector with new parameters values

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.ProcessmakerApi();

var processId = "processId_example"; // String | ID of Process to fetch

var taskId = "taskId_example"; // String | ID of Task to fetch

var connectorId = "connectorId_example"; // String | ID of Task Connector to fetch

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
 **processId** | **String**| ID of Process to fetch | 
 **taskId** | **String**| ID of Task to fetch | 
 **connectorId** | **String**| ID of Task Connector to fetch | 
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

var apiInstance = new PMIO.ProcessmakerApi();

var taskInstanceId = "taskInstanceId_example"; // String | ID of task instance to retrieve

var taskInstanceUpdateItem = new PMIO.TaskInstanceUpdateItem(); // TaskInstanceUpdateItem | Task Instance object to update


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
 **taskInstanceId** | **String**| ID of task instance to retrieve | 
 **taskInstanceUpdateItem** | [**TaskInstanceUpdateItem**](TaskInstanceUpdateItem.md)| Task Instance object to update | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

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

var apiInstance = new PMIO.ProcessmakerApi();

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

