const express = require('express');
const app = express();
app.use(express.json());
const db = require('./db');

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    SELECT "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      FROM "grades"
     WHERE "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
    SELECT "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      FROM "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      if (!grades) {
        res.status(404).json({
          error: 'Cannot find any grades'
        });
      } else {
        res.status(200).json(grades);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  const sql = `
    INSERT INTO "grades" ("name",
           "course",
           "scores")
    VALUES ($1, $2, $3)
    RETURNING ROW
  `;
  const values = [req.body.name, req.body.course, req.body.score];
  db.query(sql, values)
    .then(result => {
      const grades = result.rows;
      if (!grades) {
        res.status(404).json({
          error: 'Cannot find any grades'
        });
      } else {
        res.status(200).json(grades);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
