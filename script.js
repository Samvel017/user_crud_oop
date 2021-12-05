let userOut = document.querySelector('.user-output');
let addUser = document.querySelector('#addUser');
let userName = document.querySelector('#name');
let userSur = document.querySelector('#surname');
let userAddress = document.querySelector('#address');
let userTel = document.querySelector('#tel');
let arr = [];
class User {
  constructor(name, sur, addr, tel) {
    this.name = name;
    this.sur = sur;
    this.addr = addr;
    this.tel = tel;
  }
  myFunc = (user) => {
    let userBlock = document.createElement('div');
    userBlock.classList.add('user-block');
    userBlock.innerHTML = `
    <ul>
      <li><span>Name:</span><input type="text" value="${this.name}" class="inputName" readonly><b><i class="fas fa-edit"></i></b></li>
      <li><span>Surname:</span><span>${this.sur}</span></li>
      <li><span>Address:</span><span>${this.addr}</span></li>
      <li><span>Tel:</span><span>${this.tel}</span></li>
    </ul>
    <button class="removeUser">Remove</button>
    `;
    let removeUser = userBlock.querySelector('.removeUser');
    let editName = userBlock.querySelector('.fa-edit');
    let nameInput = userBlock.querySelector('.inputName');
    nameInput.classList.add('name-edit');
    removeUser.addEventListener('click', (e) => {
      e.target.parentNode.remove();
      let index = arr.indexOf(user);
      if (index != '-1') {
        arr.splice(index, 1);
      }
    });
    nameInput.addEventListener('keyup', (e) => {
      if (e.keyCode == '13') {
        editName.click();
      }
    });
    editName.addEventListener('click', () => {
      if (nameInput.classList.contains('active')) {
        if (nameInput.value != '') {
          nameInput.classList.remove('active');
          nameInput.setAttribute('readonly', true);
          user.name = nameInput.value;
        }
      } else {
        nameInput.classList.add('active');
        nameInput.removeAttribute('readonly');
      }
    });
    userOut.append(userBlock);
  };
}

addUser.addEventListener('click', () => {
  if (
    userName.value != '' &&
    userSur.value != '' &&
    userAddress.value != '' &&
    userTel.value != ''
  ) {
    let user = new User(
      userName.value,
      userSur.value,
      userAddress.value,
      userTel.value
    );
    arr.push(user);
    user.myFunc(user);
  }
});

// ----------------- SEARCH --------------------

let searchUsers = document.querySelector('#search');
let searchVal;

searchUsers.addEventListener('keyup', function () {
  let blocks = userOut.querySelectorAll('.user-block');
  blocks.forEach((e) => {
    e.remove();
  });
  searchVal = this.value.toLowerCase();
  let newArr;
  newArr = [];
  for (let j = 0; j < arr.length; j++) {
    if (!searchVal || arr[j].name.toLowerCase().indexOf(searchVal) > -1) {
      newArr.push(arr[j]);
    }
  }

  newArr.forEach((elem) => {
    let userBlock = document.createElement('div');
    userBlock.classList.add('user-block');
    userBlock.innerHTML = `
    <ul>
      <li><span>Name:</span><input type="text" value="${elem.name}" class="inputName" readonly><b><i class="fas fa-edit"></i></b></li>
      <li><span>Surname:</span><span>${elem.sur}</span></li>
      <li><span>Address:</span><span>${elem.addr}</span></li>
      <li><span>Tel:</span><span>${elem.tel}</span></li>
    </ul>
    <button class="removeUser">Remove</button>
    `;
    let removeUser = userBlock.querySelector('.removeUser');
    let editName = userBlock.querySelector('.fa-edit');
    let nameInput = userBlock.querySelector('.inputName');
    nameInput.classList.add('name-edit');
    removeUser.addEventListener('click', (e) => {
      e.target.parentNode.remove();
      let index = arr.indexOf(elem);
      if (index != '-1') {
        arr.splice(index, 1);
      }
    });
    nameInput.addEventListener('keyup', (e) => {
      if (e.keyCode == '13') {
        editName.click();
      }
    });
    editName.addEventListener('click', () => {
      if (nameInput.classList.contains('active')) {
        if (nameInput.value != '') {
          nameInput.classList.remove('active');
          nameInput.setAttribute('readonly', true);
          elem.name = nameInput.value;
        }
      } else {
        nameInput.classList.add('active');
        nameInput.removeAttribute('readonly');
      }
    });
    userOut.append(userBlock);
  });
});

// ------------------------------------------
