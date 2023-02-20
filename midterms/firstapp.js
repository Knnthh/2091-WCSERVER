var express = require('Express');

var app = express();

app.get('/', function (request, response) {
  response.send('HELLO WORLD');
});

app.listen(3000, function () {
  console.log('Example app listening at http://localhost:3000');
});
