'use strict';
var dataProvider = require('../data/task.js');
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
     */
    post: function updateTask(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
