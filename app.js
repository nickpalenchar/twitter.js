var chalk = require('chalk');
var express = require('express');
var app = express();
var swig = require('swig');
var tweetBank = require('./tweetBank');

swig.setDefaults({cache: false});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(function(req, res, next){
    console.log(chalk.bgBlue(req.method) + " " + chalk.magenta(req.url) + " " + chalk.green(res.statusCode));
    next();

});

app.get('/', function(req, res, next){
  // res.send("Hello World!");
  var data = {
    title: "An example",
    people: tweetBank.list(),
  };
//  var data = tweetBank.list();

  res.render('index', data, function(err, output){
    if(err) throw err;
    res.send(output);
  });
  //res.sendStatus(200);

});

app.listen(3000, function(req, res, next){
  console.log("Server listening");
});
