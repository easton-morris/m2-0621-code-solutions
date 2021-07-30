let count = 3;

const timeID = setInterval(() => {
  if (count !== 0) {
    console.log(count);
    count--;
  } else {
    console.log('Blast off!');
    clearInterval(timeID);
  }
}, 1000);
