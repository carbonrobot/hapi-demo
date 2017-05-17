'use strict';

var Joi = require('joi');

/**
 * Schema configuration for swagger
 */
module.exports = {

    getTokenResponse: Joi.object({
        id_token: Joi.string(),
        token_type: Joi.string(),
        expires_in: Joi.number()
    })

};