var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log(pathname);

    var nameStart;
    var greetName;

    if(pathname.lastIndexOf('/') > 0) {
      nameStart = pathname.lastIndexOf('/') + 1;
      greetName = pathname.substring(nameStart, pathname.length);
      pathname = pathname.substring(0, pathname.lastIndexOf('/'));
      //console.log(greetName); 
    }
    
    console.log('Request for ' + pathname + ' received.');

    route(handle, pathname, response, greetName);
  }

  http.createServer(onRequest).listen(8888);
  console.log('Server has started.');
}

exports.start = start;
