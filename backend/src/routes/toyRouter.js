var express = require('express');
var app = express();
var toyRouter = express.Router();


//require model
var Toy = require('../models/Toy');


//define routes
toyRouter.route('/add/post').post(function(req, res) {
  var toy = new Toy(req.body);
  toy.save()
  .then(toy => {
    res.json('Toy added successfully');
  })
  .catch(err => {
    res.status(400).send('Unable to save to the database.');
  });
});


module.export = toyRouter;
