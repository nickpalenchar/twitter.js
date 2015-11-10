var express = require('express');
var path = require('path');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

router.get('/users/:name', function(req, res){
  var name = req.params.name;
  var list = tweetBank.find({name: name});
  console.log(list);
  res.render('index', {title: 'Twitter.js', tweets: list});
})
router.get('/users/:name/tweets/:id', function(req, res){
  var name = req.params.name;
  var id = req.params.id;
  var list = tweetBank.find({name: name, id: id});
  console.log(list);
  res.render('index', {title: 'Tweet from ' + name, tweets: list})
})

router.get('/stylesheets/style.css', function(req, res) {
//router.get('/layout.html', function(req, res){
    console.log("we are here");
    //console.log(req.path);
    res.sendFile(path.join(__dirname, '../public/stylesheets/style.css'));
});


module.exports = router;