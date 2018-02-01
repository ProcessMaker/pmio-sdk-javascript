# PMIO.Logs

All URIs are relative to *https://CHANGEME.api.processmaker.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAggregatedLogs**](Logs.md#listAggregatedLogs) | **GET** /logs/aggregated | 
[**listLogs**](Logs.md#listLogs) | **GET** /logs/ | 
[**logSummary**](Logs.md#logSummary) | **GET** /logs/summary | 


<a name="listAggregatedLogs"></a>
# **listAggregatedLogs**
> ListAggregatedLogCollection listAggregatedLogs(opts)



This method retrieves all existing aggregated logs.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Logs();

var opts = { 
  'action': "processToken", // String | The string to filter by action.
  'interval': "day", // String | The string to filter by period, accepted values: day|hour|month
  'processId': "processId_example", // String | The string to filter by the process ID.
  'dateFrom': "dateFrom_example", // String | Start date for retrieved list.
  'dateTo': "dateTo_example" // String | End date for retrieved list.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAggregatedLogs(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **action** | **String**| The string to filter by action. | [optional] [default to processToken]
 **interval** | **String**| The string to filter by period, accepted values: day|hour|month | [optional] [default to day]
 **processId** | **String**| The string to filter by the process ID. | [optional] 
 **dateFrom** | **String**| Start date for retrieved list. | [optional] 
 **dateTo** | **String**| End date for retrieved list. | [optional] 

### Return type

[**ListAggregatedLogCollection**](ListAggregatedLogCollection.md)

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

var apiInstance = new PMIO.Logs();

var opts = { 
  'search': "search_example", // String | The string to search in logs.
  'order': "order_example", // String | The order of retrieved list.
  'processId': "processId_example", // String | Filter by the process ID.
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
apiInstance.listLogs(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| The string to search in logs. | [optional] 
 **order** | **String**| The order of retrieved list. | [optional] 
 **processId** | **String**| Filter by the process ID. | [optional] 
 **dateFrom** | **String**| Start date for retrieved list. | [optional] 
 **dateTo** | **String**| End date for retrieved list. | [optional] 
 **page** | **Integer**| Page number to fetch | [optional] [default to 1]
 **perPage** | **Integer**| Amount of items per page | [optional] [default to 15]

### Return type

[**ListLogCollection**](ListLogCollection.md)

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

var apiInstance = new PMIO.Logs();

var opts = { 
  'action': "action_example", // String | The action to search in logs.
  'processId': "processId_example", // String | Filter by the process ID.
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
 **processId** | **String**| Filter by the process ID. | [optional] 
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

