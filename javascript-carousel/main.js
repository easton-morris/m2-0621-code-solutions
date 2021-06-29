const $progArea = document.querySelector('.progress-area');
/* const $caroImg = document.querySelector('.carousel-img');
 */
const imageSet = [
  {
    itemNum: 1,
    path: 'images/001.png',
    altText: 'bulbasaur'
  },
  {
    itemNum: 2,
    path: 'images/004.png',
    altText: 'charmander'
  },
  {
    itemNum: 3,
    path: 'images/007.png',
    altText: 'squirtle'
  },
  {
    itemNum: 4,
    path: 'images/025.png',
    altText: 'pikachu'
  },
  {
    itemNum: 5,
    path: 'images/039.png',
    altText: 'jigglypuff'
  }
];

function createIcons() {
  const firstIcon = document.createElement('i');
  firstIcon.setAttribute('class', 'progress-icon hoverable fas fa-gem');
  $progArea.appendChild(firstIcon);

  for (let i = 0; i < (imageSet.length - 1); i++) {
    const nextIcon = document.createElement('i');
    firstIcon.setAttribute('class', 'progress-icon hoverable far fa-gem');
    $progArea.appendChild(nextIcon);
  }
}

document.addEventListener('load', createIcons());
