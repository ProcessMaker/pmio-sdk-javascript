/**
 * ProcessMaker API
 * This ProcessMaker I/O API provides access to a BPMN 2.0 compliant workflow engine API that is designed to be used as a microservice to support enterprise cloud applications. The current Alpha 1.0 version supports most of the descriptive classes of the BPMN 2.0 specification.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@processmaker.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['Processmaker/ApiClient', 'Processmaker/Model/EventItem', 'Processmaker/Model/ErrorArray', 'Processmaker/Model/EventCreateItem', 'Processmaker/Model/EventConnector1', 'Processmaker/Model/EventConnectorCreateItem', 'Processmaker/Model/ResultSuccess', 'Processmaker/Model/DataModelItem1', 'Processmaker/Model/TriggerEventCreateItem', 'Processmaker/Model/EventConnectorsCollection', 'Processmaker/Model/EventCollection', 'Processmaker/Model/EventUpdateItem', 'Processmaker/Model/EventConnectorUpdateItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../Model/EventItem'), require('../Model/ErrorArray'), require('../Model/EventCreateItem'), require('../Model/EventConnector1'), require('../Model/EventConnectorCreateItem'), require('../Model/ResultSuccess'), require('../Model/DataModelItem1'), require('../Model/TriggerEventCreateItem'), require('../Model/EventConnectorsCollection'), require('../Model/EventCollection'), require('../Model/EventUpdateItem'), require('../Model/EventConnectorUpdateItem'));
  } else {
    // Browser globals (root is window)
    if (!root.PMIO) {
      root.PMIO = {};
    }
    root.PMIO.Events = factory(root.PMIO.ApiClient, root.PMIO.EventItem, root.PMIO.ErrorArray, root.PMIO.EventCreateItem, root.PMIO.EventConnector1, root.PMIO.EventConnectorCreateItem, root.PMIO.ResultSuccess, root.PMIO.DataModelItem1, root.PMIO.TriggerEventCreateItem, root.PMIO.EventConnectorsCollection, root.PMIO.EventCollection, root.PMIO.EventUpdateItem, root.PMIO.EventConnectorUpdateItem);
  }
}(this, function(ApiClient, EventItem, ErrorArray, EventCreateItem, EventConnector1, EventConnectorCreateItem, ResultSuccess, DataModelItem1, TriggerEventCreateItem, EventConnectorsCollection, EventCollection, EventUpdateItem, EventConnectorUpdateItem) {
  'use strict';

  /**
   * Events service.
   * @module Processmaker/PMIO/Events
   * @version 1.0.0
   */

  /**
   * Constructs a new Events. 
   * @alias module:Processmaker/PMIO/Events
   * @class
   * @param {module:Processmaker/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:Processmaker/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addEvent operation.
     * @callback module:Processmaker/PMIO/Events~addEventCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/EventItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method creates the new event.
     * @param {String} processId ID of the process related to the event
     * @param {module:Processmaker/Model/EventCreateItem} eventCreateItem JSON API response with the event object to add
     * @param {module:Processmaker/PMIO/Events~addEventCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/EventItem}
     */
    this.addEvent = function(processId, eventCreateItem, callback) {
      var postBody = eventCreateItem;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling addEvent";
      }

      // verify the required parameter 'eventCreateItem' is set
      if (eventCreateItem == undefined || eventCreateItem == null) {
        throw "Missing the required parameter 'eventCreateItem' when calling addEvent";
      }


      var pathParams = {
        'process_id': processId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = EventItem;

      return this.apiClient.callApi(
        '/processes/{process_id}/events', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addEventConnector operation.
     * @callback module:Processmaker/PMIO/Events~addEventConnectorCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/EventConnector1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method is intended for creating a new event connector.
     * @param {String} processId ID of the process to fetch
     * @param {String} eventId ID of the event to fetch
     * @param {module:Processmaker/Model/EventConnectorCreateItem} eventConnectorCreateItem JSON API with the EventConnector object to add
     * @param {module:Processmaker/PMIO/Events~addEventConnectorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/EventConnector1}
     */
    this.addEventConnector = function(processId, eventId, eventConnectorCreateItem, callback) {
      var postBody = eventConnectorCreateItem;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling addEventConnector";
      }

      // verify the required parameter 'eventId' is set
      if (eventId == undefined || eventId == null) {
        throw "Missing the required parameter 'eventId' when calling addEventConnector";
      }

      // verify the required parameter 'eventConnectorCreateItem' is set
      if (eventConnectorCreateItem == undefined || eventConnectorCreateItem == null) {
        throw "Missing the required parameter 'eventConnectorCreateItem' when calling addEventConnector";
      }


      var pathParams = {
        'process_id': processId,
        'event_id': eventId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = EventConnector1;

      return this.apiClient.callApi(
        '/processes/{process_id}/events/{event_id}/connectors', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteEvent operation.
     * @callback module:Processmaker/PMIO/Events~deleteEventCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/ResultSuccess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method deletes an event using the event ID and process ID.
     * @param {String} processId Process ID
     * @param {String} eventId ID of the event to delete
     * @param {module:Processmaker/PMIO/Events~deleteEventCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/ResultSuccess}
     */
    this.deleteEvent = function(processId, eventId, callback) {
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling deleteEvent";
      }

      // verify the required parameter 'eventId' is set
      if (eventId == undefined || eventId == null) {
        throw "Missing the required parameter 'eventId' when calling deleteEvent";
      }


      var pathParams = {
        'process_id': processId,
        'event_id': eventId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = ResultSuccess;

      return this.apiClient.callApi(
        '/processes/{process_id}/events/{event_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteEventConnector operation.
     * @callback module:Processmaker/PMIO/Events~deleteEventConnectorCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/ResultSuccess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method is for deleting a single event connector based on event ID, process ID and Connector ID.
     * @param {String} processId ID of the process item
     * @param {String} eventId ID of item to fetch
     * @param {String} connectorId ID of EventConnector to fetch
     * @param {module:Processmaker/PMIO/Events~deleteEventConnectorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/ResultSuccess}
     */
    this.deleteEventConnector = function(processId, eventId, connectorId, callback) {
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling deleteEventConnector";
      }

      // verify the required parameter 'eventId' is set
      if (eventId == undefined || eventId == null) {
        throw "Missing the required parameter 'eventId' when calling deleteEventConnector";
      }

      // verify the required parameter 'connectorId' is set
      if (connectorId == undefined || connectorId == null) {
        throw "Missing the required parameter 'connectorId' when calling deleteEventConnector";
      }


      var pathParams = {
        'process_id': processId,
        'event_id': eventId,
        'connector_id': connectorId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = ResultSuccess;

      return this.apiClient.callApi(
        '/processes/{process_id}/events/{event_id}/connectors/{connector_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the eventTrigger operation.
     * @callback module:Processmaker/PMIO/Events~eventTriggerCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/DataModelItem1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method starts/triggers an event.
     * @param {String} processId Process ID related to the event
     * @param {String} eventId ID of the event to trigger
     * @param {module:Processmaker/Model/TriggerEventCreateItem} triggerEventCreateItem Json with some parameters
     * @param {module:Processmaker/PMIO/Events~eventTriggerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/DataModelItem1}
     */
    this.eventTrigger = function(processId, eventId, triggerEventCreateItem, callback) {
      var postBody = triggerEventCreateItem;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling eventTrigger";
      }

      // verify the required parameter 'eventId' is set
      if (eventId == undefined || eventId == null) {
        throw "Missing the required parameter 'eventId' when calling eventTrigger";
      }

      // verify the required parameter 'triggerEventCreateItem' is set
      if (triggerEventCreateItem == undefined || triggerEventCreateItem == null) {
        throw "Missing the required parameter 'triggerEventCreateItem' when calling eventTrigger";
      }


      var pathParams = {
        'process_id': processId,
        'event_id': eventId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = DataModelItem1;

      return this.apiClient.callApi(
        '/processes/{process_id}/events/{event_id}/trigger', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the eventWebhook operation.
     * @callback module:Processmaker/PMIO/Events~eventWebhookCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This webhook method triggers a given event object.
     * @param {String} processId Process ID related to the event
     * @param {String} eventId ID of the event to trigger
     * @param {String} triggerBody Freeform JSON structure, it will be passed to the newly created DataModel
     * @param {module:Processmaker/PMIO/Events~eventWebhookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.eventWebhook = function(processId, eventId, triggerBody, callback) {
      var postBody = triggerBody;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling eventWebhook";
      }

      // verify the required parameter 'eventId' is set
      if (eventId == undefined || eventId == null) {
        throw "Missing the required parameter 'eventId' when calling eventWebhook";
      }

      // verify the required parameter 'triggerBody' is set
      if (triggerBody == undefined || triggerBody == null) {
        throw "Missing the required parameter 'triggerBody' when calling eventWebhook";
      }


      var pathParams = {
        'process_id': processId,
        'event_id': eventId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/processes/{process_id}/events/{event_id}/webhook', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findEventById operation.
     * @callback module:Processmaker/PMIO/Events~findEventByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/EventItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method retrieves an event using its ID.
     * @param {String} processId ID of the process to return
     * @param {String} eventId ID of the event to return
     * @param {module:Processmaker/PMIO/Events~findEventByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/EventItem}
     */
    this.findEventById = function(processId, eventId, callback) {
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling findEventById";
      }

      // verify the required parameter 'eventId' is set
      if (eventId == undefined || eventId == null) {
        throw "Missing the required parameter 'eventId' when calling findEventById";
      }


      var pathParams = {
        'process_id': processId,
        'event_id': eventId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = EventItem;

      return this.apiClient.callApi(
        '/processes/{process_id}/events/{event_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findEventConnectorById operation.
     * @callback module:Processmaker/PMIO/Events~findEventConnectorByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/EventConnector1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method returns all event connectors related to the run process and event.
     * @param {String} processId ID of the process to fetch
     * @param {String} eventId ID of Event to fetch
     * @param {String} connectorId ID of EventConnector to fetch
     * @param {module:Processmaker/PMIO/Events~findEventConnectorByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/EventConnector1}
     */
    this.findEventConnectorById = function(processId, eventId, connectorId, callback) {
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling findEventConnectorById";
      }

      // verify the required parameter 'eventId' is set
      if (eventId == undefined || eventId == null) {
        throw "Missing the required parameter 'eventId' when calling findEventConnectorById";
      }

      // verify the required parameter 'connectorId' is set
      if (connectorId == undefined || connectorId == null) {
        throw "Missing the required parameter 'connectorId' when calling findEventConnectorById";
      }


      var pathParams = {
        'process_id': processId,
        'event_id': eventId,
        'connector_id': connectorId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = EventConnector1;

      return this.apiClient.callApi(
        '/processes/{process_id}/events/{event_id}/connectors/{connector_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findEventConnectors operation.
     * @callback module:Processmaker/PMIO/Events~findEventConnectorsCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/EventConnectorsCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method returns all event connectors related to the run process and Event.
     * @param {String} processId ID of the process to fetch
     * @param {String} eventId ID of the task to fetch
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page Page number to fetch (default to 1)
     * @param {Integer} opts.perPage Amount of items per page (default to 15)
     * @param {module:Processmaker/PMIO/Events~findEventConnectorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/EventConnectorsCollection}
     */
    this.findEventConnectors = function(processId, eventId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling findEventConnectors";
      }

      // verify the required parameter 'eventId' is set
      if (eventId == undefined || eventId == null) {
        throw "Missing the required parameter 'eventId' when calling findEventConnectors";
      }


      var pathParams = {
        'process_id': processId,
        'event_id': eventId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = EventConnectorsCollection;

      return this.apiClient.callApi(
        '/processes/{process_id}/events/{event_id}/connectors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findEvents operation.
     * @callback module:Processmaker/PMIO/Events~findEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/EventCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method returns all events related to the running process.
     * @param {String} processId ID of the process related to the event
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page Page number to fetch (default to 1)
     * @param {Integer} opts.perPage Amount of items per page (default to 15)
     * @param {module:Processmaker/PMIO/Events~findEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/EventCollection}
     */
    this.findEvents = function(processId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling findEvents";
      }


      var pathParams = {
        'process_id': processId
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = EventCollection;

      return this.apiClient.callApi(
        '/processes/{process_id}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateEvent operation.
     * @callback module:Processmaker/PMIO/Events~updateEventCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/EventItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method updates an existing event.
     * @param {String} processId ID of the process to retrieve
     * @param {String} eventId ID of the event to retrieve
     * @param {module:Processmaker/Model/EventUpdateItem} eventUpdateItem Event object to edit
     * @param {module:Processmaker/PMIO/Events~updateEventCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/EventItem}
     */
    this.updateEvent = function(processId, eventId, eventUpdateItem, callback) {
      var postBody = eventUpdateItem;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling updateEvent";
      }

      // verify the required parameter 'eventId' is set
      if (eventId == undefined || eventId == null) {
        throw "Missing the required parameter 'eventId' when calling updateEvent";
      }

      // verify the required parameter 'eventUpdateItem' is set
      if (eventUpdateItem == undefined || eventUpdateItem == null) {
        throw "Missing the required parameter 'eventUpdateItem' when calling updateEvent";
      }


      var pathParams = {
        'process_id': processId,
        'event_id': eventId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = EventItem;

      return this.apiClient.callApi(
        '/processes/{process_id}/events/{event_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateEventConnector operation.
     * @callback module:Processmaker/PMIO/Events~updateEventConnectorCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/EventConnector1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method updates the existing event connector with new parameter values.
     * @param {String} processId ID of the process to fetch
     * @param {String} eventId ID of the event to fetch
     * @param {String} connectorId ID of the event Connector to fetch
     * @param {module:Processmaker/Model/EventConnectorUpdateItem} eventConnectorUpdateItem EventConnector object to edit
     * @param {module:Processmaker/PMIO/Events~updateEventConnectorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/EventConnector1}
     */
    this.updateEventConnector = function(processId, eventId, connectorId, eventConnectorUpdateItem, callback) {
      var postBody = eventConnectorUpdateItem;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling updateEventConnector";
      }

      // verify the required parameter 'eventId' is set
      if (eventId == undefined || eventId == null) {
        throw "Missing the required parameter 'eventId' when calling updateEventConnector";
      }

      // verify the required parameter 'connectorId' is set
      if (connectorId == undefined || connectorId == null) {
        throw "Missing the required parameter 'connectorId' when calling updateEventConnector";
      }

      // verify the required parameter 'eventConnectorUpdateItem' is set
      if (eventConnectorUpdateItem == undefined || eventConnectorUpdateItem == null) {
        throw "Missing the required parameter 'eventConnectorUpdateItem' when calling updateEventConnector";
      }


      var pathParams = {
        'process_id': processId,
        'event_id': eventId,
        'connector_id': connectorId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['PasswordGrant'];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = EventConnector1;

      return this.apiClient.callApi(
        '/processes/{process_id}/events/{event_id}/connectors/{connector_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
