const notes = require('./data.json');
const fs = require('fs');

const notesObj = notes.notes;

function deleteItem(id) {
  delete notesObj[id];
  const notesJSON = JSON.stringify(notes, null, 2);
  fs.writeFile('data.json', notesJSON, err => {
    if (err) throw err;
  });
}

module.exports = deleteItem;
