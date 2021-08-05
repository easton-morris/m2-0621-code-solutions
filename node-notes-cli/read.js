const notes = require('./data.json');

const notesObj = notes.notes;

function read() {
  for (const prop in notesObj) {
    console.log(prop, ': ', notesObj[prop]);
  }
}

module.exports = read;
