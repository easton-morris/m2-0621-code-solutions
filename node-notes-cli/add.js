const notes = require('./data.json');
const fs = require('fs');

const notesObj = notes.notes;

function create(string) {
  notesObj[notes.nextId] = string;
  notes.nextId = notes.nextId + 1;
  const notesJSON = JSON.stringify(notes, null, 2);
  fs.writeFile('data.json', notesJSON, err => {
    if (err) throw err;
  });
}

module.exports = create;
