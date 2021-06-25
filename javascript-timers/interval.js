const intID = window.setInterval(function () {
  const header = document.querySelector('h1');
  if (header.textContent === '4') {
    header.textContent = '3';
  } else if (header.textContent === '3') {
    header.textContent = '2';
  } else if (header.textContent === '2') {
    header.textContent = '1';
  } else if (header.textContent === '1') {
    header.textContent = '~Earth Beeeelooowww Us~';
  } else if (header.textContent === '~Earth Beeeelooowww Us~') {
    window.clearInterval(intID);
  }
}, 2.0 * 1000);
