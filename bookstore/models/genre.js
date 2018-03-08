var mongoose = require('mongoose');

// Genre Schema

var genreSchema = mongoose.Schema({
	name: {
		type:String,
		required:true
	},
	create_date:{
		type: Date,
		default:Date.now
	}
});
console.log("fetching data 1");
var Genre = module.exports = mongoose.model('Genre',genreSchema);
console.log("fetching data 2");
// Get Genres
module.exports.getGenres = function (callback,limit){
 Genre.find(callback).limit(limit);
}
console.log("fetching data 3");