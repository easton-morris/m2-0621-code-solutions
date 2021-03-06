const $progArea = document.querySelector('.progress-area');
const $caroImg = document.querySelector('.carousel-img');
const $leftArrow = document.querySelector('i[class="arrow hoverable fas fa-arrow-circle-left"]');
const $rightArrow = document.querySelector('i[class="arrow hoverable fas fa-arrow-circle-right"]');
let intervalNum = 0;

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

function delayTimer() {
  intervalNum = window.setInterval(function () {
    let currentPos = $caroImg.getAttribute('data-num');
    currentPos = parseInt(currentPos);
    if (currentPos === (imageSet.length - 1)) {
      $iconList[0].setAttribute('class', 'progress-icon hoverable fas fa-gem');
      $caroImg.setAttribute('src', imageSet[0].path);
      $caroImg.setAttribute('alt', imageSet[0].altText);
      $iconList[currentPos].setAttribute('class', 'progress-icon hoverable far fa-gem');
      $caroImg.setAttribute('data-num', 0);
    } else {
      advanceImg();
    }
  }, 3 * 1000);
}

delayTimer();

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

createIcons();
const $iconList = document.querySelectorAll('.fa-gem');

function updateItems(position) {
  $caroImg.setAttribute('src', imageSet[position].path);
  $caroImg.setAttribute('alt', imageSet[position].altText);
  $iconList[position].setAttribute('class', 'progress-icon hoverable fas fa-gem');

  window.clearInterval(intervalNum);
  delayTimer();
}

function advanceImg() {
  let currentPos = $caroImg.getAttribute('data-num');
  currentPos = parseInt(currentPos);
  currentPos += 1;
  $caroImg.setAttribute('data-num', currentPos);
  if (currentPos >= 0 && currentPos < imageSet.length) {
    $iconList[(currentPos - 1)].setAttribute('class', 'progress-icon hoverable far fa-gem');
    updateItems(currentPos);
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
    $iconList[(currentPos + 1)].setAttribute('class', 'progress-icon hoverable far fa-gem');
    updateItems(currentPos);
  } else {
    currentPos += 1;
    $caroImg.setAttribute('data-num', currentPos);
  }
}

function jumpImg(event) {
  const progPos = event.target.getAttribute('data-pos');
  const $resetIcon = document.querySelector('i[class="progress-icon hoverable fas fa-gem"]');
  updateItems(progPos);
  $resetIcon.setAttribute('class', 'progress-icon hoverable far fa-gem');
  event.target.setAttribute('class', 'progress-icon hoverable fas fa-gem');
  $caroImg.setAttribute('data-num', progPos);
}

$progArea.addEventListener('click', jumpImg);
$rightArrow.addEventListener('click', advanceImg);
$leftArrow.addEventListener('click', backImg);
