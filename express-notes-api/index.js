const express = require('express');
const app = express();

const notes = require('./data.json');

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const resArr = [];
  for (const prop in notes.notes) {
    const resJSON = notes.notes[prop];
    resArr.push(resJSON);
  }
  res.status(200).json(resArr);
});

app.get('/api/notes/:id', (req, res) => {
  if (parseInt(req.params.id) > 0) {
    if (req.params.id in notes.notes) {
      res.status(200).json(notes.notes[req.params.id]);
    } else {
      res.status(404).json({ error: `cannot find note with id ${req.params.id}` });
    }
  } else {
    res.status(400).json({ error: 'id must be a positive integer' });
  }
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Listening on Port 3000'));
