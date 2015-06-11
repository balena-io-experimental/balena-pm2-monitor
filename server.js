//Lets require/import the HTTP module
var util = require('util'),  
    http = require('http');

http.createServer(function (req, res) {  
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('This server will never die! MWAHAHAHA!')
  res.end();
}).listen(8080);

/* server started */  
util.puts('> hello world running on port 8080');

/* break the server every 5s */
setTimeout(function () {  
  util.puts('Throwing error now.');
  throw new Error('User generated fault.');
}, 5000);