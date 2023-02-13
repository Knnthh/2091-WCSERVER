var express = require('express');

var app = express();

app.get('./', function (request, response){
  response.send("HELLO WORLD");
})

app.listen(port, () => {
  console.log("Example app listening at http://localhost:3000");
});