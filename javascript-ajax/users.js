const $userList = document.querySelector('#user-list');
function getUsers() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    for (const prop in this.response) {
      const newLi = document.createElement('li');
      newLi.textContent = this.response[prop].name;
      $userList.appendChild(newLi);
    }
  });
  xhr.send();
}

getUsers();
