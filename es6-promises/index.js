const takeAChance = require('./take-a-chance');

const promiseObj = takeAChance('Easton');

promiseObj.then(resolve => {
  console.log(resolve);
});

promiseObj.catch(error => {
  console.log(error.message);
});
