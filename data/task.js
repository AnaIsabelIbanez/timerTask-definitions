'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /task
 */
module.exports = {
    /**
     * summary: update or create task
     * description: 
     * parameters: task
     * produces: 
     * responses: 200, default
     * operationId: updateTask
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/task',
                operation: 'post',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/task',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};
