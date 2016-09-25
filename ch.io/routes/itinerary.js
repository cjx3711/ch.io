var express = require('express');
var router = express.Router();

// Return format
// [
//   {
//     type: "Event",
//     data: object
//   },
//   {
//     type: "Travel"
//     time: 12
//   }
// ]
//
/* GET users listing. */
router.get('/generate', function(req, res, next) {
  var hours = req.param('hours');
  res.send('Hours:' + hours); // RETURN
  // res.send('respond with a resource');
  var hours = req.body.hours;

  // Run chim knapsack also here
  var itinerary = [];

  res.json(itinerary);
});

module.exports = router;
