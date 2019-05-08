var path = require("path");
var cupcakes = require("../data/cupcakes");

//Routes
module.exports = function (app) {
//shows all possible cupcakes
  app.get("/api/cupcakes", function (req, res) {
    res.json(cupcakes);
  });
//handle incoming survey results
  app.post("/api/cupcakes", function (req, res) {
  
    var flavor = {
      name: "",
      photo: "",
      difference: 9999
    };
//parse survey results    
    var userScores = req.body.scores;
    
    //loop through cupcakes
    for (var i = 0; i < cupcakes.length; i++) {
      var totalDifference = 0;
      //loops through scores 
      for (var j = 0; j < cupcakes[i].scores.length; j++) {
          totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(cupcakes[i].scores[j]));
      }

      if (totalDifference <= flavor.difference) {
        flavor.name = cupcakes[i].name;
        flavor.photo = cupcakes[i].photo;
        flavor.difference = totalDifference;
      }
    }

    //show response to user
    res.json(flavor);
  });
};