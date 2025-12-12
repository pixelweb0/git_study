/*
이벤트 핸들러 등록하기
*/

let btn = document.querySelector('#myBtn');

function event1() {
  console.log('Hi Javascript!');
}

function event2() {
  console.log('Hello again!');
}

// elem.addEventListener('이벤트이름', 이벤트핸들러)
btn.addEventListener('click', event1);
btn.addEventListener('click', event2);

// elem.removeEventListener('이벤트이름', 이벤트핸들러)
btn.removeEventListener('click', event2);



const myInput = document.querySelector('#myInput');
const inputBtn = document.querySelector('#inputBtn');

myInput.addEventListener('keydown', function () {
  console.log('keyboard Event!')
});

inputBtn.addEventListener('click', function () {
  console.log('Mouse Event!')
});

function printEvent(event) {
  console.log(event);
  event.target.style.color = 'red';
}

myInput.addEventListener('keydown', printEvent);
inputBtn.addEventListener('click', printEvent);



