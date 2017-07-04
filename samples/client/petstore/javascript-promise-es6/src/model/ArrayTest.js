/**
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import ReadOnlyFirst from './ReadOnlyFirst';





/**
* The ArrayTest model module.
* @module model/ArrayTest
* @version 1.0.0
*/
export default class ArrayTest{
    /**
    * Constructs a new <code>ArrayTest</code>.
    * @alias module:model/ArrayTest
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ArrayTest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ArrayTest} obj Optional instance to populate.
    * @return {module:model/ArrayTest} The populated <code>ArrayTest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArrayTest();

            
            
            

            if (data.hasOwnProperty('array_of_string')) {
                obj['array_of_string'] = ApiClient.convertToType(data['array_of_string'], ['String']);
            }
            if (data.hasOwnProperty('array_array_of_integer')) {
                obj['array_array_of_integer'] = ApiClient.convertToType(data['array_array_of_integer'], [['Number']]);
            }
            if (data.hasOwnProperty('array_array_of_model')) {
                obj['array_array_of_model'] = ApiClient.convertToType(data['array_array_of_model'], [[ReadOnlyFirst]]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<String>} array_of_string
    */
    array_of_string = undefined;
    /**
    * @member {Array.<Array.<Number>>} array_array_of_integer
    */
    array_array_of_integer = undefined;
    /**
    * @member {Array.<Array.<module:model/ReadOnlyFirst>>} array_array_of_model
    */
    array_array_of_model = undefined;








}


