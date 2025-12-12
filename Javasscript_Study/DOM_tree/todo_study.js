const today = document.querySelector('#today');

// today.innerHTML = '<li>처음</li>' + today.innerHTML + '<li>마지막</li>';
// today.outerHTML = '이전' + today.outerHTML + '다음';

// 요소 노드 추가하기
const tomorrow = document.querySelector('#tomorrow');

// 1. 요소 노드 만들기: document.createElement('태그이름')
const first = document.createElement('li');

// 2. 요소 노드 꾸미기: textContent, innerHTML ...
first.textContent = '처음';

// 3. 요소 노드 추가하기: NODE.prepend, append, after, before
tomorrow.prepend(first);

// const last = document.createElement('li');
last.textContent = '마지막';
tomorrow.append(last);

// const prev = document.createElement('p');
prev.textContent = '이전';
tomorrow.before(prev);

// const next = document.createElement('p');
next.textContent = '다음';
tomorrow.after(next);

// 노드 삭제하기: NODE.remove();
tomorrow.remove();
tomorrow.children[1].remove();

// 노드 이동하기: prepend, append, before, after
// today.append(tomorrow.children[2]);
// today.prepend(tomorrow.children[2]);
tomorrow.children[1].after(today.children[1]);

// HTML 속성 (HTML attribute)
const tomorrow2 = document.querySelector('#tomorrow');
const item = tomorrow.firstElementChild;
const link = item.firstElementChild;

// 속성에 접근하기: elem.getAttribute('속성이름')
console.log(tomorrow2.getAttribute('href'));
console.log(item.getAttribute('class'));

// 속성 추가(수정): elem.setAttribute('속성이름', '새로운 값')
tomorrow2.setAttribute('class', 'list');  // 추가
link.setAttribute('href', 'https://www.coupang.com');  // 수정

// 속성 제거: elem.removeAttribute('속성이름')
tomorrow2.removeAttribute('href');
tomorrow2.removeAttribute('class');



// 스타일 다루기
const toay2 = document.querySelector('#today');
const tomorrow3 = document.querySelector('#tomorrow');

// elem.classList: add, remove, toggle
const item2 = tomorrow3.children[1];
// 추가
item2.classList.add('done', 'other');
// 제거
item2.classList.remove('other');
/*
토글: 추가되어 있으면 제거, 없으면 추가
true: add 기능, false: remove 기능
*/
item2.classList.toggle('done2');

// elem.className
toay2.children[1].className = 'done';

// style 프로퍼티
toay2.children[0].style.textDecoration = 'line-through';
toay2.children[0].style.backgroundColor = '#dddddd';





