var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var artistsSchema = new Schema({

	artist : String,
	bndcmp : String,
	fbook : String,
	profpic : String, 
	tapes : [{
		digitalurl : String,
		imgurl : String,
		name: String,
		storeurl : String
								}]


	});

mongoose.model('artists', artistsSchema);