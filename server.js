//=========REQUIRE express and body parser ====//
//======Series of npm packages=====//
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//======EXPRESS configuration======//

var app = express();

var PORT = process.env.PORT || 8889;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

//===having issues requiring===//

require("./friendfinder/app/routing/apiRoutes")(app);
require("./friendfinder/app/routing/htmlRoutes")(app);


//=======LISTENER=======//
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });