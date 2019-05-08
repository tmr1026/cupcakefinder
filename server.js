var express = require("express");

var app = express();
var PORT = process.env.PORT||3000;
//import routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//start listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });