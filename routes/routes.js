// const vars to connect uuidv4, express.Router, and fs
const { v4: uuidv4 } = require('uuid');
const router = require('express').Router()
const fs = require('fs');

//router.get to parse the db.json
router.get('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('db/db.json'))
    res.json(notes)
});

//router.post path
router.post('/notes', (req, res) => {
// structures any new notes for the db.json
    const newNotes = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    //parses all notes and pushes new notes to the array
    const notes = JSON.parse(fs.readFileSync("db/db.json"));
    notes.push(newNotes)
    //stringifies all notes in db.json and returns them
    fs.writeFileSync('db/db.json', JSON.stringify(notes))
    res.json(notes);
});
// exports the module
    module.exports = router;