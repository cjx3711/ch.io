/**
 * File: command.js
 * This file parses the commmands in the form of text
 * It should return some stuff.
 */
 var express = require('express');
 var router = express.Router();

 /* GET users listing. */
 router.post('/', function(req, res, next) {
   // res.send('respond with a resource');
   res.json({message: "Server side message"});
 });

 module.exports = router;
