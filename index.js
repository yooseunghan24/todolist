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

addList.addEventListener('click', function() {
  const li = document.createElement('li');
  const checkBtn = document.createElement('button');
  const checkBtnClass = document.createAttribute('class');
  const checkBtnImg = document.createElement('img');
  const checkBtnImgSrc = document.createAttribute('src');
  const liText = document.createElement('span');
  liText.textContent = text.value;
  checkBtnClass.value = 'check';
  checkBtnImgSrc.value = 'check.png';
  checkBtnImg.setAttributeNode(checkBtnImgSrc);
  checkBtn.setAttributeNode(checkBtnClass);
  checkBtn.appendChild(checkBtnImg);
  li.appendChild(checkBtn);
  li.appendChild(liText);
  list.appendChild(li);
  const check = document.querySelectorAll('.check');
  const img = document.querySelectorAll('img');
  check.forEach(function(ele, idx) {
    let checked = false;
    ele.addEventListener('click', function() {
      if(!checked) {
        img[idx].setAttribute('src', 'checked.png');
        checked = true;
      } else {
        img[idx].setAttribute('src', 'check.png');
        checked = false;
      }
    })
  })
})

