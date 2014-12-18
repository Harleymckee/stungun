var express = require('express');
var path = require('path'); 
var app = express();




app.use(express.static(path.join(__dirname + '/client')));

function home (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.render('client/index.html');
};


app.get('/', home);




var port = process.env.PORT || 3333;

app.listen(port, function() {
    console.log('Listening on port %d', port);
});