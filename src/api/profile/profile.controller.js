'use strict';

const Boom = require('boom');

/**
 * Profile API methods
 */
module.exports = {

    /**
     * Returns profile information for the logged in user
     */
    getProfile: function (request, reply) {
        const user = request.auth.credentials;
        return reply({
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname
        });
    }

};
