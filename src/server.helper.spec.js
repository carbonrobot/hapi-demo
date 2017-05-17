'use strict';

const Hapi = require('hapi');
const config = require('./config');
const api = require('./api');
const auth = require('./auth');

// export server
function createServer(done) {
    const server = new Hapi.Server();
    server.connection();

    const plugins = [config, auth, api];
    if(process.env.DEBUG){
        plugins.push(require('./monitor'));
    }

    server.register(plugins, () => {
        done();
    });

    return server;
}

module.exports.createServer = createServer;