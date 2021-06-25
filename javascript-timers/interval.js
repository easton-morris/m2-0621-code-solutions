let timer = 0;

window.setInterval(function (text) {
  const header = document.querySelector('h1');
  header.textContent = text[timer];
  timer++;
  if (timer === 4) {
    window.clearInterval(1);
  }
}, 1000, ['3', '2', '1', '~Earth Beeeelooowww Us~']);
