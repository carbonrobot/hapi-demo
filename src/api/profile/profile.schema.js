'use strict';

var Joi = require('joi');

/**
 * Schema configuration for swagger
 */
module.exports = {

    getProfileResponse: Joi.object({
        id: Joi.number(),
        firstname: Joi.string().max(50),
        lastname: Joi.string().max(50)
    })

};