const $progArea = document.querySelector('.progress-area');
const $caroImg = document.querySelector('.carousel-img');
const $leftArrow = document.querySelector('i[class="arrow hoverable fas fa-arrow-circle-left"]');
const $rightArrow = document.querySelector('i[class="arrow hoverable fas fa-arrow-circle-right"]');

const imageSet = [
  {
    itemNum: 0,
    path: 'images/001.png',
    altText: 'bulbasaur'
  },
  {
    itemNum: 1,
    path: 'images/004.png',
    altText: 'charmander'
  },
  {
    itemNum: 2,
    path: 'images/007.png',
    altText: 'squirtle'
  },
  {
    itemNum: 3,
    path: 'images/025.png',
    altText: 'pikachu'
  },
  {
    itemNum: 4,
    path: 'images/039.png',
    altText: 'jigglypuff'
  }
];

function createIcons() {
  const firstIcon = document.createElement('i');
  firstIcon.setAttribute('class', 'progress-icon hoverable fas fa-gem');
  firstIcon.setAttribute('data-pos', 0);
  $progArea.appendChild(firstIcon);

  for (let i = 0; i < (imageSet.length - 1); i++) {
    const nextIcon = document.createElement('i');
    nextIcon.setAttribute('class', 'progress-icon hoverable far fa-gem');
    nextIcon.setAttribute('data-pos', (i + 1));
    $progArea.appendChild(nextIcon);
  }
}

document.addEventListener('load', createIcons());

function advanceImg() {
  let currentPos = $caroImg.getAttribute('data-num');
  currentPos = parseInt(currentPos);
  currentPos += 1;
  $caroImg.setAttribute('data-num', currentPos);
  if (currentPos >= 0 && currentPos < imageSet.length) {
    $caroImg.setAttribute('src', imageSet[currentPos].path);
    $caroImg.setAttribute('alt', imageSet[currentPos].altText);
  } else {
    currentPos -= 1;
    $caroImg.setAttribute('data-num', currentPos);
  }
}

function backImg() {
  let currentPos = $caroImg.getAttribute('data-num');
  currentPos = parseInt(currentPos);
  currentPos -= 1;
  $caroImg.setAttribute('data-num', currentPos);
  if (currentPos >= 0 && currentPos < imageSet.length) {
    $caroImg.setAttribute('src', imageSet[currentPos].path);
    $caroImg.setAttribute('alt', imageSet[currentPos].altText);
  } else {
    currentPos += 1;
    $caroImg.setAttribute('data-num', currentPos);
  }
}

function jumpImg(event) {
  const progPos = event.target.getAttribute('data-pos');
  $caroImg.setAttribute('src', imageSet[progPos].path);
  $caroImg.setAttribute('alt', imageSet[progPos].altText);
  const $resetIcon = document.querySelector('i[class="progress-icon hoverable fas fa-gem"]');
  $resetIcon.setAttribute('class', 'progress-icon hoverable far fa-gem');
  event.target.setAttribute('class', 'progress-icon hoverable fas fa-gem');
}

$progArea.addEventListener('click', jumpImg);
$rightArrow.addEventListener('click', advanceImg);
$leftArrow.addEventListener('click', backImg);
