/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  let check = true;
  if (amount > 0 && typeof amount === 'number' && Number.isInteger(amount)) {
    this.transactions.push(new Transaction('deposit', amount));
  } else {
    check = false;
  }
  return check;
};
Account.prototype.withdraw = function (amount) {
  let check = true;
  if (amount > 0 && typeof amount === 'number' && Number.isInteger(amount)) {
    this.transactions.push(new Transaction('withdrawal', amount));
  } else {
    check = false;
  }
  return check;
};
Account.prototype.getBalance = function () {
  let balance = 0;
  for (let i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      balance -= this.transactions[i].amount;
    }
  }
  return balance;
};
