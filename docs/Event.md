# PMIO.Event

All URIs are relative to *https://CHANGEME.api.processmaker.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addEvent**](Event.md#addEvent) | **POST** /processes/{process_id}/events | 
[**addEventConnector**](Event.md#addEventConnector) | **POST** /processes/{process_id}/events/{event_id}/connectors | 
[**deleteEvent**](Event.md#deleteEvent) | **DELETE** /processes/{process_id}/events/{event_id} | 
[**deleteEventConnector**](Event.md#deleteEventConnector) | **DELETE** /processes/{process_id}/events/{event_id}/connectors/{connector_id} | 
[**eventTrigger**](Event.md#eventTrigger) | **POST** /processes/{process_id}/events/{event_id}/trigger | 
[**eventWebhook**](Event.md#eventWebhook) | **POST** /processes/{process_id}/events/{event_id}/webhook | 
[**findEventById**](Event.md#findEventById) | **GET** /processes/{process_id}/events/{event_id} | 
[**findEventConnectorById**](Event.md#findEventConnectorById) | **GET** /processes/{process_id}/events/{event_id}/connectors/{connector_id} | 
[**findEventConnectors**](Event.md#findEventConnectors) | **GET** /processes/{process_id}/events/{event_id}/connectors | 
[**findEvents**](Event.md#findEvents) | **GET** /processes/{process_id}/events | 
[**updateEvent**](Event.md#updateEvent) | **PUT** /processes/{process_id}/events/{event_id} | 
[**updateEventConnector**](Event.md#updateEventConnector) | **PUT** /processes/{process_id}/events/{event_id}/connectors/{connector_id} | 


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

var apiInstance = new PMIO.Event();

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

var apiInstance = new PMIO.Event();

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

var apiInstance = new PMIO.Event();

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

var apiInstance = new PMIO.Event();

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

var apiInstance = new PMIO.Event();

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
> &#39;String&#39; eventWebhook(processId, eventId, triggerBody)



This webhook method triggers a given event object.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Event();

var processId = "processId_example"; // String | Process ID related to the event

var eventId = "eventId_example"; // String | ID of the event to trigger

var triggerBody = "triggerBody_example"; // String | Freeform JSON structure, it will be passed to the newly created DataModel


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventWebhook(processId, eventId, triggerBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| Process ID related to the event | 
 **eventId** | **String**| ID of the event to trigger | 
 **triggerBody** | **String**| Freeform JSON structure, it will be passed to the newly created DataModel | 

### Return type

**&#39;String&#39;**

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

var apiInstance = new PMIO.Event();

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

var apiInstance = new PMIO.Event();

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

<a name="findEventConnectors"></a>
# **findEventConnectors**
> EventConnectorsCollection findEventConnectors(processId, eventId, opts)



This method returns all event connectors related to the run process and Event.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Event();

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
apiInstance.findEventConnectors(processId, eventId, opts, callback);
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

<a name="findEvents"></a>
# **findEvents**
> EventCollection findEvents(processId, opts)



This method returns all events related to the running process.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Event();

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
apiInstance.findEvents(processId, opts, callback);
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

var apiInstance = new PMIO.Event();

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

var apiInstance = new PMIO.Event();

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

