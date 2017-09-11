# PMIO.Oauth

All URIs are relative to *https://CHANGEME.api.processmaker.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOauthClient**](Oauth.md#addOauthClient) | **POST** /users/{user_id}/clients | 
[**findOauthClientById**](Oauth.md#findOauthClientById) | **GET** /users/{user_id}/clients/{client_id} | 
[**findOauthClients**](Oauth.md#findOauthClients) | **GET** /users/{user_id}/clients | 


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

var apiInstance = new PMIO.Oauth();

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

var apiInstance = new PMIO.Oauth();

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

<a name="findOauthClients"></a>
# **findOauthClients**
> OauthClientCollection findOauthClients(userId, opts)



This method retrieves all existing Oauth clients belonging to a user.

### Example
```javascript
var PMIO = require('PMIO');
var defaultClient = PMIO.ApiClient.default;

// Configure OAuth2 access token for authorization: PasswordGrant
var PasswordGrant = defaultClient.authentications['PasswordGrant'];
PasswordGrant.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PMIO.Oauth();

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
apiInstance.findOauthClients(userId, opts, callback);
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

