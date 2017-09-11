# PMIO.Gateway

All URIs are relative to *https://CHANGEME.api.processmaker.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addGateway**](Gateway.md#addGateway) | **POST** /processes/{process_id}/gateways | 
[**deleteGateway**](Gateway.md#deleteGateway) | **DELETE** /processes/{process_id}/gateways/{gateway_id} | 
[**findGatewayById**](Gateway.md#findGatewayById) | **GET** /processes/{process_id}/gateways/{gateway_id} | 
[**findGateways**](Gateway.md#findGateways) | **GET** /processes/{process_id}/gateways | 
[**updateGateway**](Gateway.md#updateGateway) | **PUT** /processes/{process_id}/gateways/{gateway_id} | 


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

var apiInstance = new PMIO.Gateway();

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

var apiInstance = new PMIO.Gateway();

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

var apiInstance = new PMIO.Gateway();

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

var apiInstance = new PMIO.Gateway();

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
apiInstance.findGateways(processId, opts, callback);
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

var apiInstance = new PMIO.Gateway();

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

