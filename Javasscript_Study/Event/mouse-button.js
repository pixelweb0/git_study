/*
마우스 버튼 이벤트

> MouseEvent.buttonn
0 : 마우스 왼쪽 버튼
1 : 마우스 가운데 버튼 (휠))
2 : 마우스 오른쪽 버튼

> MouseEvent.type
click : 마우스 왼쪽 버튼을 눌렀을 때
contextmenu : 마우스 오른쪽 버튼을 눌렀을 때
dblclick : 마우스 왼쪽 버튼을 두 번 눌렀을 때
mousedown : 마우스 버튼을 누른 순간
mouseup : 마우스 버튼을 떼었을 때
*/

let timer = 0;

function printEventType(e) {
  const EVENT_DURATION = 800;
  const eventTime = new Date();

  if (timer === 0) {
    timer = new Date();
  }

  if (eventTime - timer > EVENT_DURATION) {
    console.log('--------------------');
  }

  if (e.target.id !== 'mouse') {
    e.preventDefault();
  }

  const btns = document.querySelector('#btns');
  const btn = document.querySelector(`#btn${e.button}`);
  btns.classList.add(`clicked-${e.button}`);
  btn.textContent = e.button;
  console.log(`${e.type} 이벤트가 발생했습니다.`);

  if (e.type === 'dblclick') {
    btns.className = 'dblclick';
  }

  function styleInit() {
    btns.className = '';
    btn.textContent = '';
  }

  setTimeout(styleInit, EVENT_DURATION);

  timer = eventTime;
}

document.addEventListener('click', printEventType);
document.addEventListener('contextmenu', printEventType);
document.addEventListener('dblclick', printEventType);
document.addEventListener('mousedown', printEventType);
document.addEventListener('mouseup', printEventType);
