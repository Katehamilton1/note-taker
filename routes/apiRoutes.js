// const fs = require("fs");
const path = require("path");

const db = require("../db/db.json")
const router = require("express").Router();



    // API GET Request-- find all notes
    router.get("/api/notes",  (request, response) => {
        console.log(db)
        response.json(db);
    })

    // Retrieves a note with specific id
    router.get("/api/notes/:id",(request, response) => {
        response.json(notes[request.params.id]);
    })
    

     // create a new note 
    router.post("/api/notes",(request, response) => {
        // set id based on what the next index of the array will be
        request.body.id = notes.length.toString();

        let notes = createNewNote(request.body, notes);
        response.json(notes);
    })
   

    // API DELETE note Request 
    router.delete("/api/user/id:", (request, response)=> {
        notes.splice(request.params.id,1);

        console.log("Deleted note with id " + request.params.id);
    });

    module.exports = router;