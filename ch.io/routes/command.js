/**
 * File: command.js
 * This file parses the commmands in the form of text
 * It should return some stuff.
 */
 var express = require('express');
 var router = express.Router();
 require('string_score');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json({message: req.param});
  });
router.post('/', function(req, res, next) {
  // res.send('respond with a resource');
  var rawString = req.body.data.toLowerCase();
  var category = parseCategory(rawString);
  var dataFields = getData(category, rawString);

  res.json({body: req.body.data });
});


var ITINERARY = 'itinerary';
var LOCATION = 'location';
var PURCHASE = 'purchase';

var PURCHASE_FULL = ['buy'];
var LOCATION_START = ['where'];
var LOCATION_END = ['find', 'is']
var ITINERARY_FULL = ['bored'];
var ITINERARY_START = ['what'];
var ITINERARY_END = ['do'];

var LOCATION_LIST = ["cactus garden", "atm", "check in"];

// Input cases:
//   What can I do in 5 hours?
//   I need to buy a gift

function hasStringMatch(str, array) {
  for (word in array) {
    if (str.includes(word)) {
      return word;
    }
  }
  return null;
}

function parseCategory(rawString) {
  if (hasStringMatch(rawString, PURCHASE_FULL)) {
    return PURCHASE;
  }
  if (hasStringMatch(rawString, LOCATION_START) && hasStringMatch(rawString, LOCATION_END)) {
    return LOCATION;
  }
  if ((hasStringMatch(rawString, ITINERARY_START) && hasStringMatch(rawString, ITINERARY_END)
      || hasStringMatch(rawString, ITINERARY_FULL)) {
    return ITINERARY;
  }
  return "";
}


var intToStr = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90
};

function getData(category, rawString) {
  switch (category) {
    case ITINERARY:
      // Parse the data
      var time = getTime(rawString);
      return {time: time};
    case LOCATION:
      var location = getLocation(rawString);
      return {location: location};
    case PURCHASE:
      var purchase = getPurchase(rawString);
      return {purchase: purchase};
    default:
      return {};
  }
}

function getTime(rawString) {
  var list = rawString.split(" ");
  var hours = list.indexOf("hours");
  for (int i=0; i<hours; i++) {
    var number = intToStr(list[i]) || parseInt(list[i]);
    if (number) {
      return number;
    }
  }
  return null;
}

function getLocation(rawString) {
  for (loc in locationList) {
    var res = hasStringMatch(rawString, LOCATION_LIST);
    if (res) {
      return res;
    }
  }
  return null;
}

module.exports = router;
