// 날짜
const year = document.querySelector('.year');
const month = document.querySelector('.month');
const days = document.querySelector('.days');
const dayWeek = document.querySelector('.day-of-week');
const date = new Date();
const dayWeekArr = ['일', '월', '화', '수', '목', '금', '토', '일'];

year.textContent = date.getFullYear();
month.textContent = date.getMonth() + 1 < 10
? '0' + (date.getMonth() + 1)
: date.getMonth() + 1;
days.textContent = date.getDate();
dayWeek.textContent = dayWeekArr[date.getDay()]; 

// 체크버튼
const text = document.querySelector('#text');
const addList = document.querySelector('.add-list');
const list = document.querySelector('.list-wrap ul');

addList.addEventListener('click', () => {
  if(text.value === '') return;
  const li = document.createElement('li');
  const checkBtn = document.createElement('button');
  const checkBtnImg = document.createElement('img');
  const liText = document.createElement('span');
  liText.textContent = text.value;
  checkBtn.setAttribute('class', 'check');
  checkBtnImg.setAttribute('src', 'check.png');
  checkBtn.appendChild(checkBtnImg);
  li.appendChild(checkBtn);
  li.appendChild(liText);
  list.appendChild(li);
  const check = document.querySelectorAll('.check');
  const img = document.querySelectorAll('img');
  check.forEach(function(ele, idx) {
    let checked = false;
    ele.addEventListener('click', () => {
      if(!checked) {
        img[idx].setAttribute('src', 'checked.png');
        checked = true;
      } else {
        img[idx].setAttribute('src', 'check.png');
        checked = false;
      }
    })
  })
  const edit = document.querySelector('.edit');
  const currentList = document.querySelectorAll('.list-wrap ul li')
  for(let i of currentList) {
    i.style.position = 'relative';
  }
  let editClicked = false;
  edit.addEventListener('click', () => {
    if (!editClicked) {
      const deleteBtn = document.createElement('button');
      deleteBtn.setAttribute('class', 'delete-btn');
      deleteBtn.style.position = 'absolute';
      deleteBtn.style.right = 0;
      for(let i of currentList) {
        i.appendChild(deleteBtn);
      }
      const deleteButton = document.querySelectorAll('.delete-btn');
      deleteButton.forEach((ele, idx) => {
        ele.addEventListener('click', () => {
          currentList[idx].remove();
        })
      })
      addList.disabled = true;
      editClicked = true;
    } else {
      const deleteButton = document.querySelectorAll('.delete-btn');
      for(let i of deleteButton) {
        i.remove();
      }
      addList.disabled = false;
      editClicked = false;
    }
  })
})