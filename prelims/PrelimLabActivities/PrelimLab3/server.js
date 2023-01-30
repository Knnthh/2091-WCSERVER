var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    // Lachica, Giann Kenneth / 10-30-23 / WD201
    res.writeHead(200, { 'Content-type': 'text/html' });

    res.write(
      '<h1>Welcome to my Node.js Application</h1><p>Welcome John Smith. This is an activity about basics of Node.js</p>'
    );
    res.end();
  } else if (req.url == '/about') {
    // Lachica, Giann Kenneth / 10-30-23 / WD201
    res.writeHead(200, { 'Content-type': 'text/html' });

    res.write(
      '<h1>This is About Page</h1><p>Hello John Smith. This activity will teach on how to deal with a simple server and local modules in Node.js</p>'
    );
    res.end();
  } else if (req.url == '/gallery') {
    // Lachica, Giann Kenneth / 10-30-23 / WD201
    res.writeHead(200, { 'Content-type': 'text/html' });

    res.write('<h1>This is the Gallery Page</h1>');
    res.end();
  } else res.end('Invalid Request');
});

server.listen(5000);
console.log('Node.js web server at port 5000 is running..');
