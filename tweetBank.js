var _ = require('underscore');

var data = [];
var userTweetNumber = {};

var add = function(name,text){
  if(userTweetNumber.hasOwnProperty(name)) userTweetNumber[name]++;
  else userTweetNumber[name] = 1;
  data.push({ name: name, text: text, id: userTweetNumber[name].toString() });
};

var list = function() {
  return _.clone(data);
};

var find = function(properties){
  return _.where(data, properties);
};


module.exports = {add: add, list: list, find: find};

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
  var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for(var i=0; i<50; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}

//console.log(getFakeName(), getFakeTweet());