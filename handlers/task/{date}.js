'use strict';
var dataProvider = require('../../data/task/{date}.js');
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
     */
    get: function showTasksByDay(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
