var chalk = require('chalk');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var swig = require('swig');
var socketio = require('socket.io');

//var tweetBank = require('./tweetBank');
var routes = require('./routes/');

swig.setDefaults({cache: false});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use('/', routes(io));
app.use(function(req, res, next){
    console.log(chalk.bgBlue(req.method) + " " + chalk.magenta(req.url) + " " + chalk.green(res.statusCode));
    next();

});



// app.get('/', function(req, res, next){
//   // res.send("Hello World!");
//   var data = {
//     title: "An example",
//     people: tweetBank.list(),
//   };
// //  var data = tweetBank.list();

//   res.render('index', data, function(err, output){
//     if(err) throw err;
//     res.send(output);
//   });
//   //res.sendStatus(200);

// });

var server = app.listen(3000,  function(req, res, next){
  console.log("Server listening");
});
var io = socketio.listen(server);

//app.listen(3000,);
