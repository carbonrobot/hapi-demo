'use strict';

const Hapi = require('hapi');           // a very happy server

const config = require('./config');     // application configuration
const monitor = require('./monitor');   // Monitoring, logging
const auth = require('./auth');         // Authentication
const api = require('./api');           // REST API

const server = new Hapi.Server();
server.connection({ port: 1337 });

server.register([config, monitor, auth, api], err => {
    if(err) throw err;
    
    server.start(err => {
        if(err) throw err;

        console.log(`[hapi] running at ${server.info.uri}`);
    });
});

