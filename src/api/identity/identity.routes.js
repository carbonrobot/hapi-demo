'use strict';

const controller = require('./identity.controller');
const validations = require('./identity.validations');
const schema = require('./identity.schema');

/**
 * Route configuration
 */
module.exports = [
    {
        method: 'POST',
        path: '/auth/v1/token',
        handler: controller.getToken,
        config: {
        	description: 'Returns the identity of the authenticated user.',
        	notes: 'Authenticates the user information and returns a signed JWT token.',
        	tags: ['api', 'identity'],
            validate: validations.getToken,
            response: { schema: schema.getTokenResponse },
            auth: false
        }
    }
];