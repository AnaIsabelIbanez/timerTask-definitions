'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /task/{date}
 */
module.exports = {
    /**
     * summary: Info for a specific day tasks
     * description: 
     * parameters: date
     * produces: 
     * responses: 200, default
     * operationId: showTasksByDay
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/task/{date}',
                operation: 'get',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/task/{date}',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
