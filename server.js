var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	// ejs render automatically looks in the views folder
	res.sendfile('./views/index.html');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});