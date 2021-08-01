const fs = require('fs');

let rand = Math.random();
rand = '' + rand;

fs.writeFile('random.txt', rand, err => {
  if (err) throw err;
});
