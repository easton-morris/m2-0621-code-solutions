const notes = require('./data.json');
const fs = require('fs');

const notesObj = notes.notes;

function create(string) {
  notesObj[notes.nextId] = string;
  const notesJSON = JSON.stringify(notes, null, 2);
  fs.writeFile('data.json', notesJSON, err => {
    if (err) throw err;
  });
  notes.nextId++;
}

module.exports = create;
