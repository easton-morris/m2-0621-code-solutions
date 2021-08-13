const express = require('express');

const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  const resArr = [];
  for (const prop in grades) {
    const resJSON = grades[prop];
    resArr.push(resJSON);
  }
  res.json(resArr);
});

app.delete('/api/grades/:id', (req, res) => {
  delete grades[req.params.id];
  res.sendStatus(204);
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Listening on 3000'));
