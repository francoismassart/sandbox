// Generated by CoffeeScript 1.3.3
(function() {
  var GRID_SIZE, fs, owl2, regex, regexStr, wordList;

  GRID_SIZE = 5;

  fs = require('fs');

  owl2 = fs.readFileSync('OWL2.txt', 'utf8');

  regex = /^(\w+)/mg;

  regexStr = "^(\w{1," + GRID_SIZE + "})";

  console.log(regexStr);

  regex = new RegExp(regexStr, "mg");

  wordList = owl2.match(regex);

  console.log(wordList);

}).call(this);
