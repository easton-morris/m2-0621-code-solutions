const express = require('express');
const app = express();
const mwJSON = express.json();
app.use(mwJSON);

const grades = {};
let id = 2;

app.get('/api/grades', (req, res) => {
  const resArr = [];
  for (const prop in grades) {
    const resJSON = grades[prop];
    resArr.push(resJSON);
  }
  res.json(resArr);
});

app.post('/api/grades', (req, res) => {
  grades[id] = {
    id: id,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  };
  res.status(201);
  res.json(grades[id]);
  id++;
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Listening on 3000'));
