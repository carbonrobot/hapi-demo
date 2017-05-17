'use strict';

var Joi = require('joi');

/**
 * Request validation schema
 */
module.exports = {

	getToken: {
		payload: {
            response_type: Joi.string().required(),
            client_id: Joi.string().required(),
            scope: Joi.string().required(),
            state: Joi.string().required(),
            redirect_uri: Joi.string().required(),
            username: Joi.string().required(),
            password: Joi.string().required()
        }
	}

};