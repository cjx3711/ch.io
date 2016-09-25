/**
 * File: command.js
 * This file parses the commmands in the form of text
 * It should return some stuff.
 */
 var express = require('express');
 var router = express.Router();

 /* GET users listing. */
 router.get('/', function(req, res, next) {
   // res.send('respond with a resource');
   res.json({message: req.param});
 });
 router.post('/', function(req, res, next) {
   // res.send('respond with a resource');
   var rawString = req.body.data;


   res.json({body: req.body.data });
 });


var ITINERARY = 'itinerary';
var LOCATION = 'location';
var PURCHASE = 'purchase';

// Input cases:
//   What can I do in 5 hours?
//   I need to buy a gift

function parseCategory(rawString) {

}
function getData(category, rawString) {
  switch (category) {
    case ITINERARY:
      // Parse the data
    break;
    case LOCATION:

    break;

    case PURCHASE:

    break;
  }
}

 module.exports = router;
