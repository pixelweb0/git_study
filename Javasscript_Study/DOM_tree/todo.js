// 스타일 다루기
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// elem.classList: add, remove, toggle
const item = tomorrow.children[1];
// 추가
item.classList.add('done', 'other');
// 제거
item.classList.remove('other');
/*
토글: 추가되어 있으면 제거, 없으면 추가
true: add 기능, false: remove 기능
*/
item.classList.toggle('done2');

// elem.className
today.children[1].className = 'done';

// style 프로퍼티
today.children[0].style.textDecoration = 'line-through';
today.children[0].style.backgroundColor = '#dddddd';