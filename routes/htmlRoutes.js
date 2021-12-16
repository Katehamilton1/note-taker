// Path package to get the file path for the html
var path = require("path");
const router = require("express").Router();

// GET request
router.get("/notes", (request, response) => {
    response.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Return to Homepage 
router.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;