var express = require('express');
var app = express();

app.get('/', function(req, res, next){
  res.send("Hello World!");
});

app.listen(3000, function(req, res, next){
  console.log("Server listening");
});
