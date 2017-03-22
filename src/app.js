// Load the http module to create an http server.

var http = require('http');
var core = require('./core');
var untested = require('./untested');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end(core.log() + '\n' + untested.log());
});

const PORT = process.env.PORT || 8000;
// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(PORT);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:" + PORT);