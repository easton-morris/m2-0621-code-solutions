const read = require('./read');
const create = require('./add');
const deleteItem = require('./delete');
const update = require('./update');

const op = process.argv[2];
const id = process.argv[3];
const string = process.argv[4];

function app(op, id, string) {
  if (op === 'read') {
    read();
  } else if (op === 'create') {
    create(string);
  } else if (op === 'delete') {
    deleteItem(id);
  } else if (op === 'update') {
    update(id, string);
  }
}

app(op, id, string);
