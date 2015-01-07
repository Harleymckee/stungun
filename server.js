var express = require('express');
//var jade = require('jade');
var path = require('path'); 
var app = express();




app.use(express.static(path.join(__dirname + '/client')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


function home (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.render('index.html');
};


app.get('/', home);

app.get('/admin', function(req, res) {

	  res.render('admin.html');
});



var port = process.env.PORT || 3333;

app.listen(port, function() {
    console.log('Listening on port %d', port);
});