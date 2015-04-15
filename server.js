var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';



app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/createPerson', function (req, res) {
  MongoClient.connect(url, function(err, db) {
  	console.log(err);
  		var collection = db.collection('people');
  		collection.insert({name: req.query.name});
  		console.log(req.query.name);
		console.log("Connected correctly to server");

		db.close();
		res.send('Added person');
	});

});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});