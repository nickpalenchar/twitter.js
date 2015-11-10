var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});


router.get('/stylesheets/style.css', function(req, res) {
//router.get('/layout.html', function(req, res){
    console.log("we are here");
    //console.log(req.path);
    res.sendFile('../public/stylesheets/style.css');
});


module.exports = router;