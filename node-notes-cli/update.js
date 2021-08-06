const notes = require('./data.json');
const fs = require('fs');

const notesObj = notes.notes;

function update(id, string) {
  if (notesObj[id] !== undefined) {
    notesObj[id] = string;
  }
  const notesJSON = JSON.stringify(notes, null, 2);
  fs.writeFile('data.json', notesJSON, err => {
    if (err) throw err;
  });
}

module.exports = update;
