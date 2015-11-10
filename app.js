var chalk = require('chalk');
var express = require('express');
var app = express();
var swig = require('swig');

app.use(function(req, res, next){
    console.log(chalk.bgBlue(req.method) + " " + chalk.magenta(req.url) + " " + chalk.green(res.statusCode));
    next();

});

app.get('/', function(req, res, next){
  // res.send("Hello World!");
  var data = {
    title: "An example",
    people: [
      {name: "Gandalf"},
      {name: "Frodo"},
      {name: "Hermione"}
    ]
  };
  swig.renderFile(__dirname + '/views/index.html', data, function(err, output){
    if(err) throw err;
    res.send(output);
  });
  //res.sendStatus(200);
  //res.send(req);
});

app.listen(3000, function(req, res, next){
  console.log("Server listening");
});
