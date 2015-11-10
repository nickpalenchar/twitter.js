var chalk = require('chalk');
var express = require('express');
var app = express();

app.use(function(req, res, next){
    console.log(chalk.bgBlue(req.method) + " " + chalk.magenta(req.url) + " " + chalk.green(res.statusCode));
    next();

});

app.get('/', function(req, res, next){
 // res.send("Hello World!");
 res.sendStatus(200);
  //res.send(req);
});

app.listen(3000, function(req, res, next){
  console.log("Server listening");
});
