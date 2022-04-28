const express = require('express');
const router = express.Router();
const fs = require('fs');
const {uuid} = require('uuidv4');

router.get('/notes', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('db/db.json', "utf-8"))
    res.json(notes)
});

router.post('/notes', (req, res) => {
    const newNotes = {
        title: req.title,
        text: req.text,
        id: uuidv4()
    }
    notes.push(newNotes);
})

module.exports = router;