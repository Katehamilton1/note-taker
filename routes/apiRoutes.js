// Linking the noteContents in db to this routes.
var noteContents = require("../db/noteContents")
var path = require("path");
let databaseFile = path.join(__dirname, '../db/noteContents.json');
//Create promise-based versions of functions using node style callbacks




//Display all notes
app.get("/api/notes", function(req,res) {
    res.json(noteContents);
});

 //Create new posts
app.get("/api/notes", function(req,res) {
let addNote = req.body;

})

// Delete a post
app.delete("/api/notes/:id", function(req, res) {

 }