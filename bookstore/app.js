var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
Genre = require('./models/genre')

//conect to mongoose
mongoose.connect ('mongodb://localhost/bookstore');

var db = mongoose.connection;

console.log("before routing books");
app.get('/api/books',function(req,res){
	res.send('Hello World!');
});
console.log("after routing books");
app.get('/api/genres',function(req,res){
	Genre.getGenres(function(err,genres){
		if(err){
			throw err;
			
		}
		res.json(genres);
	});
});
console.log("call made");

app.listen(3000);
console.log("Server running on port 3000")