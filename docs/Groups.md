# PMIO.Groups

All URIs are relative to *https://CHANGEME.api.processmaker.io/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addGroup**](Groups.md#addGroup) | **POST** /groups | 
[**addUsersToGroup**](Groups.md#addUsersToGroup) | **PUT** /groups/{id}/users | 
[**deleteGroup**](Groups.md#deleteGroup) | **DELETE** /groups/{id} | 
[**findGroupById**](Groups.md#findGroupById) | **GET** /groups/{id} | 
[**listGroups**](Groups.md#listGroups) | **GET** /groups | 
[**removeUsersFromGroup**](Groups.md#removeUsersFromGroup) | **DELETE** /groups/{id}/users | 
[**syncUsersToGroup**](Groups.md#syncUsersToGroup) | **POST** /groups/{id}/users | 
[**updateGroup**](Groups.md#updateGroup) | **PUT** /groups/{id} | 


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

var apiInstance = new PMIO.Groups();

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

var apiInstance = new PMIO.Groups();

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

var apiInstance = new PMIO.Groups();

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

var apiInstance = new PMIO.Groups();

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

var apiInstance = new PMIO.Groups();

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

var apiInstance = new PMIO.Groups();

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

var apiInstance = new PMIO.Groups();

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

var apiInstance = new PMIO.Groups();

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

