/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype = {
  openAccount: function (holder, balance) {
    if (balance > 0 && typeof balance === 'number' && Number.isInteger(balance) === true) {
      const newAccount = new Account(this.nextAccountNumber, holder);
      newAccount.deposit(balance);
      this.accounts.push(newAccount);
      this.nextAccountNumber++;
      return newAccount.number;
    } else {
      return null;
    }
  },
  getAccount: function (number) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (number === this.accounts[i].number) {
        return this.accounts[i];
      }
    }
    return null;
  },
  getTotalAssets: function () {
    let total = 0;
    if (this.accounts.length > 0) {
      for (let i = 0; i < this.accounts.length; i++) {
        total += this.accounts[i].getBalance();
      }
    } else {
      return total;
    }
    return total;
  }
};
