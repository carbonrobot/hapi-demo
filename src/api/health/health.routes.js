'use strict';

const controller = require('./health.controller');

/**
 * Route configuration
 */
module.exports = [
    {
        method: 'GET',
        path: '/health/check',
        handler: controller.getCheck,
        config: {
        	description: 'Returns OK is the service is running.',
        	notes: 'Used for testing the health of the application.',
        	tags: ['api', 'health'],
            auth: false
        }
    }
];