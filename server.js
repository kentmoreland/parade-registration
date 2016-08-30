var express = require("express");
// var path = require('path');
var bodyParser = require('body-parser');
var router = express.Router();
var Entry = require('./server/models/entries');
var entryController = require('./server/controllers/entryController');
var app = express();

//****database***
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/paradeApp')
mongoURI = process.env.MONGOLAB_URI || 'mongodb://localhost/27017/paradeApp';
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection.error:'));
db.once('open', function(){
  console.log('Mongoose connection open');
});

//allows us to get the data from a POST Request
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//set up the port allow for deployment
var port = process.env.PORT || 3000;
// REST API

// client side routing
app.get("/", function(req, res){
  res.sendFile(__dirname +  "/client/index.html");
});

app.get("/api/entries/", entryController.list);
app.post("/api/entries/", entryController.create);


app.use(express.static(__dirname + '/client'));


app.listen(port, function(){
  console.log("Strong Work!! Your server is listening on port " + port + "...");
})