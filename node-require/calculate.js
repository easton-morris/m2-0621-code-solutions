const add = require('./add');
const sub = require('./subtract');
const mult = require('./multiply');
const div = require('./divide');

const num1 = process.argv[2];
const num2 = process.argv[4];
const op = process.argv[3];

function compute(num1, op, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  if (op === 'plus') {
    console.log('result:', add(num1, num2));
  } else if (op === 'minus') {
    console.log('result:', sub(num1, num2));
  } else if (op === 'times') {
    console.log('result:', mult(num1, num2));
  } else if (op === 'over') {
    console.log('result:', div(num1, num2));
  }
}

compute(num1, op, num2);
