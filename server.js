var express = require('express');
var path = require('path'); 
var mongoose = require('mongoose');
var fs = require('fs');
var app = express();


var port = process.env.PORT || 3333;

   var bodyParser = require('body-parser');    
  //  var methodOverride = require('method-override'); 




app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname + '/client')));
// app.use(bodyParser());
app.use(bodyParser.urlencoded({'extended':'true'})); 

app.use(bodyParser.json());     

//app.use(methodOverride()); 


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










var theArts = mongoose.model('artists');


app.route('/artists')

	.post(function(req, res) {


	  theArts.create(req.body, function (err, post) {
    	if (err) return next(err);
    	res.json(post);

 		 });

		})

	.get(function(req, res) {

		theArts.find(function(err, artists) {

			if (err)
	                res.send(err)

			res.send(artists);
		});


            });


	app.delete('/artists/:id', function(req, res) {
        theArts.remove({
            _id : req.param('id')
        }, function(err, todo) { 
            if (err)
                res.send(err);
        

        theArts.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
        });
           
    });

            });
        
 











app.route('/tapes/:id')


	.post(function(req, res) {


		theArts.findOne( { _id : req.param('id') }, function(err, doc) {

			if (err)
	                res.send(err)
 
	  	var dapes = doc.tapes;
	  	dapes.push(req.body);
	  	doc.save();
	});
			
		})

	.get(function(req, res) {

		theArts.find({ _id : req.param('id') }, function(err, data) {

			if (err)
	                res.send(err)

	
			res.send(data[0].tapes);
		})


	});





var theMedia = mongoose.model('blogs');

app.route('/blog')

	.post(function(req, res) {



	  theMedia.create(req.body, function (err, post) {
    	if (err) return next(err);
    	res.json(post);
 		 });


	})

	.get(function(req, res) {

		theMedia.find(function(err, blog) {

			if (err)
	                res.send(err)
	           
			res.send(blog); 
		});

	});






app.listen(port, function() {
    console.log('Listening on port %d', port);
});