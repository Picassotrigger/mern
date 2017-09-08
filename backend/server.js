var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var PORT = 4200;


//mongoose
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/newMern')
  .then(() => {
    console.log('Mongoose started');
  })
  .catch(err => {
    console.log('Mongosse error', err.stack);
    process.exit(1);
  });


//require in toy router - this express version
var toyRouter = require('./src/routes/toyRouter');

app.use(express.static('public'));

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/toys', toyRouter);


app.listen(PORT, function() {
  console.log('Server is running on port: ', PORT);
});
