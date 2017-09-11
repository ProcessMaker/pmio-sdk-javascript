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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PMIO);
  }
}(this, function(expect, PMIO) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PMIO.ProcessInstance();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ProcessInstance', function() {
    describe('addInstance', function() {
      it('should call addInstance successfully', function(done) {
        //uncomment below and update the code to test addInstance
        //instance.addInstance(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteInstance', function() {
      it('should call deleteInstance successfully', function(done) {
        //uncomment below and update the code to test deleteInstance
        //instance.deleteInstance(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findByFieldInsideDataModel', function() {
      it('should call findByFieldInsideDataModel successfully', function(done) {
        //uncomment below and update the code to test findByFieldInsideDataModel
        //instance.findByFieldInsideDataModel(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findDataModel', function() {
      it('should call findDataModel successfully', function(done) {
        //uncomment below and update the code to test findDataModel
        //instance.findDataModel(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findInstanceById', function() {
      it('should call findInstanceById successfully', function(done) {
        //uncomment below and update the code to test findInstanceById
        //instance.findInstanceById(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findInstances', function() {
      it('should call findInstances successfully', function(done) {
        //uncomment below and update the code to test findInstances
        //instance.findInstances(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findTaskInstancesByInstanceAndTaskId', function() {
      it('should call findTaskInstancesByInstanceAndTaskId successfully', function(done) {
        //uncomment below and update the code to test findTaskInstancesByInstanceAndTaskId
        //instance.findTaskInstancesByInstanceAndTaskId(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findTaskInstancesByInstanceAndTaskIdDelegated', function() {
      it('should call findTaskInstancesByInstanceAndTaskIdDelegated successfully', function(done) {
        //uncomment below and update the code to test findTaskInstancesByInstanceAndTaskIdDelegated
        //instance.findTaskInstancesByInstanceAndTaskIdDelegated(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findTaskInstancesByInstanceAndTaskIdStarted', function() {
      it('should call findTaskInstancesByInstanceAndTaskIdStarted successfully', function(done) {
        //uncomment below and update the code to test findTaskInstancesByInstanceAndTaskIdStarted
        //instance.findTaskInstancesByInstanceAndTaskIdStarted(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findTokens', function() {
      it('should call findTokens successfully', function(done) {
        //uncomment below and update the code to test findTokens
        //instance.findTokens(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateInstance', function() {
      it('should call updateInstance successfully', function(done) {
        //uncomment below and update the code to test updateInstance
        //instance.updateInstance(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));