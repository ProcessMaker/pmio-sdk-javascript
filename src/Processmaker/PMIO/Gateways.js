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
    define(['Processmaker/ApiClient', 'Processmaker/Model/ErrorArray', 'Processmaker/Model/GatewayItem', 'Processmaker/Model/GatewayCreateItem', 'Processmaker/Model/ResultSuccess', 'Processmaker/Model/GatewayCollection', 'Processmaker/Model/GatewayUpdateItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../Model/ErrorArray'), require('../Model/GatewayItem'), require('../Model/GatewayCreateItem'), require('../Model/ResultSuccess'), require('../Model/GatewayCollection'), require('../Model/GatewayUpdateItem'));
  } else {
    // Browser globals (root is window)
    if (!root.PMIO) {
      root.PMIO = {};
    }
    root.PMIO.Gateways = factory(root.PMIO.ApiClient, root.PMIO.ErrorArray, root.PMIO.GatewayItem, root.PMIO.GatewayCreateItem, root.PMIO.ResultSuccess, root.PMIO.GatewayCollection, root.PMIO.GatewayUpdateItem);
  }
}(this, function(ApiClient, ErrorArray, GatewayItem, GatewayCreateItem, ResultSuccess, GatewayCollection, GatewayUpdateItem) {
  'use strict';

  /**
   * Gateways service.
   * @module Processmaker/PMIO/Gateways
   * @version 1.0.0
   */

  /**
   * Constructs a new Gateways. 
   * @alias module:Processmaker/PMIO/Gateways
   * @class
   * @param {module:Processmaker/ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:Processmaker/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addGateway operation.
     * @callback module:Processmaker/PMIO/Gateways~addGatewayCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/GatewayItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method creates a new gateway.
     * @param {String} processId ID of the process related to the gateway
     * @param {module:Processmaker/Model/GatewayCreateItem} gatewayCreateItem JSON API response with the gateway object to add
     * @param {module:Processmaker/PMIO/Gateways~addGatewayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/GatewayItem}
     */
    this.addGateway = function(processId, gatewayCreateItem, callback) {
      var postBody = gatewayCreateItem;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling addGateway";
      }

      // verify the required parameter 'gatewayCreateItem' is set
      if (gatewayCreateItem == undefined || gatewayCreateItem == null) {
        throw "Missing the required parameter 'gatewayCreateItem' when calling addGateway";
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
      var returnType = GatewayItem;

      return this.apiClient.callApi(
        '/processes/{process_id}/gateways', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGateway operation.
     * @callback module:Processmaker/PMIO/Gateways~deleteGatewayCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/ResultSuccess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method deletes a single item using the gateway ID and the process ID.
     * @param {String} processId Process ID
     * @param {String} gatewayId ID of the process to delete
     * @param {module:Processmaker/PMIO/Gateways~deleteGatewayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/ResultSuccess}
     */
    this.deleteGateway = function(processId, gatewayId, callback) {
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling deleteGateway";
      }

      // verify the required parameter 'gatewayId' is set
      if (gatewayId == undefined || gatewayId == null) {
        throw "Missing the required parameter 'gatewayId' when calling deleteGateway";
      }


      var pathParams = {
        'process_id': processId,
        'gateway_id': gatewayId
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
        '/processes/{process_id}/gateways/{gateway_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findGatewayById operation.
     * @callback module:Processmaker/PMIO/Gateways~findGatewayByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/GatewayItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method retrieves a gateway based on its ID.
     * @param {String} processId ID of the process to return
     * @param {String} gatewayId ID of gateway to return
     * @param {module:Processmaker/PMIO/Gateways~findGatewayByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/GatewayItem}
     */
    this.findGatewayById = function(processId, gatewayId, callback) {
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling findGatewayById";
      }

      // verify the required parameter 'gatewayId' is set
      if (gatewayId == undefined || gatewayId == null) {
        throw "Missing the required parameter 'gatewayId' when calling findGatewayById";
      }


      var pathParams = {
        'process_id': processId,
        'gateway_id': gatewayId
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
      var returnType = GatewayItem;

      return this.apiClient.callApi(
        '/processes/{process_id}/gateways/{gateway_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listGateways operation.
     * @callback module:Processmaker/PMIO/Gateways~listGatewaysCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/GatewayCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method retrieves all existing gateways.
     * @param {String} processId ID of the process related to the gateway
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page Page number to fetch (default to 1)
     * @param {Integer} opts.perPage Amount of items per page (default to 15)
     * @param {module:Processmaker/PMIO/Gateways~listGatewaysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/GatewayCollection}
     */
    this.listGateways = function(processId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling listGateways";
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
      var returnType = GatewayCollection;

      return this.apiClient.callApi(
        '/processes/{process_id}/gateways', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGateway operation.
     * @callback module:Processmaker/PMIO/Gateways~updateGatewayCallback
     * @param {String} error Error message, if any.
     * @param {module:Processmaker/Model/GatewayItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This method updates an existing gateway.
     * @param {String} processId ID of the process to retrieve
     * @param {String} gatewayId ID of the gateway to retrieve
     * @param {module:Processmaker/Model/GatewayUpdateItem} gatewayUpdateItem Gateway object to edit
     * @param {module:Processmaker/PMIO/Gateways~updateGatewayCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:Processmaker/Model/GatewayItem}
     */
    this.updateGateway = function(processId, gatewayId, gatewayUpdateItem, callback) {
      var postBody = gatewayUpdateItem;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling updateGateway";
      }

      // verify the required parameter 'gatewayId' is set
      if (gatewayId == undefined || gatewayId == null) {
        throw "Missing the required parameter 'gatewayId' when calling updateGateway";
      }

      // verify the required parameter 'gatewayUpdateItem' is set
      if (gatewayUpdateItem == undefined || gatewayUpdateItem == null) {
        throw "Missing the required parameter 'gatewayUpdateItem' when calling updateGateway";
      }


      var pathParams = {
        'process_id': processId,
        'gateway_id': gatewayId
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
      var returnType = GatewayItem;

      return this.apiClient.callApi(
        '/processes/{process_id}/gateways/{gateway_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
