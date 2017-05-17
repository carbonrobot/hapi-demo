'use strict';

const JWT = require('jsonwebtoken');

/**
 * Profile API methods
 */
module.exports = {

    /**
     * Returns and access token for an authenticated request
     */
    getToken: function (request, reply) {
        
        // TODO: validate redirect uri is registered to client_id
        // TODO: validate user against client_id (are they authz for the request site?)
        // TODO: handle oidc error scenarios
        // TODO: wire up to the actual backend services
        const token = request.server.methods.createToken({id:12,firstname:'John',lastname:'Smith'});
        return reply({
            id_token: token,
            token_type: 'bearer',
            expires_in: 3600
        });

    }

};
