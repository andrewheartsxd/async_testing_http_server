function base(response) {
  console.log('Request handler "base" was called.');

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write('ohaider');
  response.end();
}

function time(response) {
  console.log('Request handler "time" was called.');
  
  var date = new Date();
  date = date.toString();

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(date);
  response.end();
}

function greet(response, greetName) {
  console.log('Request handler "greet" was called.');

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("'sup " + greetName + '?');
  response.end();
}

exports.time = time;
exports.greet = greet;
exports.base = base;
