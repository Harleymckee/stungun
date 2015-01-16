var express = require('express');
var path = require('path'); 
var mongoose = require('mongoose');
var fs = require('fs');
var app = express();

    var bodyParser = require('body-parser');    
    var methodOverride = require('method-override'); 




app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname + '/client')));
app.use(bodyParser.urlencoded({'extended':'true'}));   
app.use(bodyParser.json());     
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());


mongoose.connect('mongodb://localhost:27017/stungun');



fs.readdirSync(__dirname + '/models').forEach(function(filename) {
	if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
});


function home (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.render('index.html');
};


app.get('/', home);

app.get('/admin', function(req, res) {

	  res.render('admin.html');
});




app.get('/artists', function(req, res) {

	mongoose.model('artists').find(function(err, artists) {

		if (err)
                res.send(err)

		res.json(artists);
	});

});







var port = process.env.PORT || 3333;

app.listen(port, function() {
    console.log('Listening on port %d', port);
});