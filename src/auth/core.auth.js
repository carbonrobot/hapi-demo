'use strict';

/**
 * Handles authentication of the decoded JWT payload
 */
module.exports = {

    /**
     * Validate the jwt payload
     * 
     * @param decoded The decoded and verified JWT from the request
     * @param request The original request object
     * @param callback A callback function with the signature function(err, isvalid, credentials) where `err` is any internal error, `valid` is true if the JWT is valid, otherwise false, and `credentials` is an optional value to override the decoded token value
     */
    validate: function (decoded, request, callback) {
        return callback(null, true);
    }

};