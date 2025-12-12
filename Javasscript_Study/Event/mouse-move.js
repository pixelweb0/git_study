/*
마우스 이동 이벤트

> MouseEvent.type
mousemove : 마우스를 움직였을 때
mouseover : 마우스가 요소 위에 들어왔을 때
mouseout : 마우스가 요소 위에서 벗어났을 때

> MouseEvent.target
: 이벤트가 발생한 요소

> MouseEvent.relatedTarget
: 이벤트가 발생하기 직전(또는 직후)에 마우스가 위치해 있던 요소

> MouseEvent.clientX, clientY
: 화면에 표시되는 창 기준 마우스 포인터 위치

> MouseEvent.pageX, pageY
: 웹 문서 기준 마우스 포인터 위치

> MouseEvent.offsetX, offsetY
: 이벤트가 발생한 요소 기준 마우스 포인터 위치
*/

const box1 = document.querySelector('#box1');

function onMouseMove(e) {
  console.log(`clientX: ${e.clientX}, clientY: ${e.clientY}`);
  console.log(`pageX: ${e.pageX}, pageY: ${e.pageY}`);
  console.log(`offsetX: ${e.offsetX}, offsetY: ${e.offsetY}`);
  console.log('--------------------------------');
}

box1.addEventListener('mousemove', onMouseMove);



const box2 = document.querySelector('#box2');

function printEventDate(e) {
  // console.log(e.type);
  if (e.target.classList.contains('cell')) {
    e.target.classList.toggle('on');
  }
  console.log('--------------------------------');

  console.log('event: ', e.type);
  console.log('target: ', e.target);
  console.log('relatedTarget: ', e.relatedTarget);
}

box2.addEventListener('mouseover', printEventDate);
box2.addEventListener('mouseout', printEventDate);


