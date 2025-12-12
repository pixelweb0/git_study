// DOM tree
const myTag = document.querySelector('#content');
console.log(myTag);

// 형제 요소 선택하기
console.log(myTag.previousElementSibling);
console.log(myTag.nextElementSibling);

// 부모 요소 선택하기
console.log(myTag.parentElement);

// 자식 요소 선택하기
console.log(myTag.children[1]);
console.log(myTag.firstElementChild);
console.log(myTag.lastElementChild);


// 요소 노드 주요 프로퍼티
const myTag2 = document.querySelector('#list-1');

/* 
innerHTML 프로퍼티
- 요소 노드 내부의 HTML 코드를 문자열로 리턴 (내부에 있는 줄바꿈이나 들여쓰기 모두 포함)
- 요소 안의 정보를 확인 할 수도 있지만, 내부의 HTML 자체를 수정할 떄 자주 사용. (내부에 있던 값을 완전히 새로운 값으로 교체하기 때문에 주의)
*/
// console.log(myTag2.innerHTML);
// 요소 수정
// myTag2.innerHTML = '<li>Exotic</li>';
// 요소 마지막에 추가
// myTag2.innerHTML += '<li>Sphynx</li>';

/* outerHTML 프로퍼티
- 요소 노드 자체의 HTML 코드를 문자열로 리턴 (내부에 있는 줄바꿈이나 들여쓰기 모두 포함)
- 새로운 값을 할당할 경우 요소 자체가 교체되어 버리기 때문에 주의
*/
// console.log(myTag2.outerHTML);
// myTag2.outerHTML = '<li>Exotic</li>';

/*
textContent 프로퍼티
- 요소 안의 내용들 중에서 HTML 태그 제외하고 텍스트만 가져옴. (내부에 있는 줄바꿈이나 들여쓰기 모두 포함)
- 새로운 값을 할당하면 내부의 값들을 완전히 새로운 값으로 교체하기 때문에 주의
- HTML 태그, 특수문자 등 모두 텍스트로 출력되기 때문에 주의
*/
// console.log(myTag2.textContent);
// 요소 수정 (HTML 태그는 문자열로 출력)
// myTag2.textContent = '<li>Exotic</li>';

