var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == '/'){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Welcome to my Node.js Application</h1>');
    res.end();

  }
server.listen(5000);

console.log('Node.js web server at port 5000 is running..');
