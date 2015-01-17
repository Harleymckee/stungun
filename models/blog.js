var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var blogSchema = new Schema({

	body1 : String,
	body2 : String,
	body3 : String,
	date : String,
	head : String,
	img1 : String,
	img2 : String


	});

mongoose.model('blogs', blogSchema);