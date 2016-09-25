var express = require('express');
var router = express.Router();

// Return format
// [
//   {
//     type: "Action",
//     data: object
//   },
//   {
//     type: "Travel"
//     time: 12
//   }
// ]
//
/* GET users listing. */

// Flow:
// What is your spirit animal? intensity: Grandfather sloth/Bunny on a sugar high
// Do you like walking? distance: I'd drive to my car if I could/My name is Johnny, I'm a walker
// Are you hungry? Not right now/I'm hangry

router.get('/generate', function(req, res, next) {
  var hours = req.param('hours');
  var preferences = req.param('preferences')

  result = []
  data = {
    id: 17,
    name: "Burberry",
    pos: { x: 5324, y: 2803 },
    category: "Retail",
    tags: ["luxury", "fashion", "fragrances", "fragrance", "sunglasses", "shades", "cosmetics", "outerwear", "clothes", "Burberry"],
    timeTaken: 20
  }
  action = { type: "Action", data: data }
  result.push(action)
  travel = { type: "Travel", time: 4 }
  result.push(travel)
  res.send(result); // RETURN
  // res.send('respond with a resource');
  var hours = req.body.hours;

  // Run chim knapsack also here
  var itinerary = [];

  res.json(itinerary);
});

module.exports = router;
