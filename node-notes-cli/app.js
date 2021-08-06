const read = require('./read');
const create = require('./add');
const deleteItem = require('./delete');
const update = require('./update');

const op = process.argv[2];
const arg1 = process.argv[3];
const arg2 = process.argv[4];

function app(op, arg1, arg2) {
  if (op === 'read') {
    read();
  } else if (op === 'create') {
    create(arg1);
  } else if (op === 'deleteItem') {
    deleteItem(arg1);
  } else if (op === 'update') {
    update(arg1, arg2);
  }
}

app(op, arg1, arg2);
