/*
이벤트 위임 (Event Delegation)
*/

const list = document.querySelector('#today');

/*
for (let item of list.children) {
  item.addEventListener('click', function (event) {
    event.target.classList.toggle('done');
  });
}
*/

/* 
요소 노드가 추가되었을 떄, 추가된 요소에 이벤트 핸들러를 등록하는 방법
(위 방법 for문은 요소 노드가 추가되었을 때, 매번 이벤트 핸들러를 등록해야 하는 번거로움이 있음)
*/
const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기쓰기';
list.append(li);

/* 
아래 방법은 li요소에서 살짝 벗어난 상태로 클릭하면,
ul#today에서도 'done' 클래스가 추가되는 문제가 있음

list.addEventListener('click', function(event) {
  event.target.classList.toggle('done');
});
*/

list.addEventListener('click', function(event) {
  // if (event.target.tagName === 'LI')      // LI 태그인지 확인
  if (event.target.classList.contains('item')) {
    event.target.classList.toggle('done');
  }
});