// const fs = require("fs");
const path = require("path");

const db = require("../db/db.json")
const router = require("express").Router();



    // API GET Request-- find all notes
    router.get("/api/notes",  (request, response) => {
        console.log(db)
        response.json(db);
    })


     // create a new note 
    router.post("/api/notes",(request, response) => {
        db.push(request.body);
        response.json("saved");
      });
   

    // API DELETE note Request 
    router.delete("/api/user/id:", (request, response)=> {
        notes.splice(request.params.id,1);

        console.log("Deleted note with id " + request.params.id);
    });

    module.exports = router;