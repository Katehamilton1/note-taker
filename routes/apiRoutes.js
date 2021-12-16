const fs = require("fs");
const path = require("path");

const db = require("../db/db.json")
const router = require("express").Router();



// API GET Request-- find all notes
router.get("/api/notes", (request, response) => {
    console.log(db)
    response.json(db);
})


// create a new note 
router.post("/api/notes", (request, response) => {
    db.push(request.body);
    response.json("saved");

    fs.writeFileSync("./db/db.json", JSON.stringify(data), function (err) {
        if (err) throw (err);
    });

    res.json(data);

});

// API DELETE note Request 
router.delete("/api/notes/:id", (request, response) => {

    let id = request.params.id;

    // Read datainfo from db.json 
    let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    for (let i = 0; i < db.length; i++) {
        if (id === db[i].id) {
          db.splice(i, 1)}
        }
          
    //write to db.json
    fs.writeFileSync("./db/db.json", JSON.stringify(notes), function (err) {
        if (err) throw err;
    })

    response.json(notes);
});







module.exports = router;