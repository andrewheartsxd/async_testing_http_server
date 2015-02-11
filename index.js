var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = requestHandlers.base;
handle['/time'] = requestHandlers.time;
handle['/greet'] = requestHandlers.greet;

server.start(router.route, handle);
