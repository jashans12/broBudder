var friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends)
    })

    app.post("/api/friends", function(req, res) {

// Create a variable to store the object with lowest score

var newBro = req.body;
var newBroScores = newBro.scores;
var score = 0;

        var broMatch = {
            name: "",
            photo: "",
            difference: 100
        };
// Get the objects from friends.js file

// Start for loop for each object in friends.js file
        for (i = 0; i < friends.length; i++) {
            score = 0;
            for (j = 0; j < friends[i].scores[j]; j++) {
                score += Math.abs(parseInt(newBroScores[j]) - parseInt(friends[i].scores[j]));

                if (score <= broMatch.difference) {
                    broMatch.name = friends[i].name;
                    broMatch.photo = friends[i].photo;
                    broMatch.difference = score;
                }
            }
        };

// Make a potScore variable to compare with score
// Compare the answers results with the post request answers

// If the new score is lower than score, change score,

// Then replace match data with the object.

// When loop is finished, push req.boy into api/friends.
        friends.push(newBro);

// Then respond with match variable.
        res.json(broMatch);
})
}