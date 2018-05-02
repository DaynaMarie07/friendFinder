//Helps direct the user. When a link is clicked - knows what page to deliver

var path = require('path');

module.exports = function (app) {

	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'))
	});
	// sends user to homepage
	app.use('/', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'))
	});

}