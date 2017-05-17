'use strict';

const jwt = require('jsonwebtoken');
const authjwt = require('hapi-auth-jwt2');
const auth = require('./core.auth'); 

/**
 * Configure CSRF protection
 */
const crumb = {
    register: require('crumb'),
    options: {
        key: 'csrf-token',
        restful: true
    }
};

/**
 * Registers the module with the server
 */
module.exports.register = function(server, options, next) {
    const config = server.settings.app;
    const plugins = [authjwt];

    // disable csrf protection in debug mode
    if (!server.settings.app.debug) {
        plugins.push[crumb]; // jshint ignore:line
    }

    server.register(plugins, () => {

        // configure jwt authentication
        server.auth.strategy('jwt', 'jwt', {
            key: config.auth.secret,
            verifyOptions: { algorithms: config.auth.algorithms },
            validateFunc: auth.validate
        });

        // set jwt auth as the default for all routes
        server.auth.default('jwt');
        
        // helper method for creating jwts
        server.method('createToken', function(user){
            return jwt.sign(user, config.auth.secret, {
                algorithm: config.auth.algorithms[0],
                expiresIn: config.auth.expireTime
            });
        });

        return next();
    });
};

// hapi.js plugin schema
module.exports.register.attributes = {
    pkg: {
        name: 'auth',
        version: '1.0.0'
    }
};