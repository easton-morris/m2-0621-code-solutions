const express = require('express');
const app = express();

const notes = [];

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const resArr = [];
  for (const prop in notes) {
    const resJSON = notes[prop];
    resArr.push(resJSON);
  }
  res.status(200).json(resArr);
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Listening on Port 3000'));
