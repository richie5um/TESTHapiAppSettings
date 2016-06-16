'use strict';

var serverConfig = {
	host: 'localhost',
	port: 1978,
	app: {
		routePrefix: '/api',
		hello: 'world'
	}
};

var Hapi = require('hapi');

const server = new Hapi.Server();
server.connection(serverConfig);

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply(`Hello, ${request.connection.settings.app.hello}!`);
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});