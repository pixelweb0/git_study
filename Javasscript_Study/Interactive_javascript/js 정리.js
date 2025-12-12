// id로 태그 선택하기
const myTag = document.getElementById('태그이름(id이름)');
console.log(myTag);

// class로 태그 선택하기
const myTags = document.getElementsByClassName('태그이름(class이름)');
console.log(myTags);
console.log(myTags[1]);
console.log(myTags.length);

for(let tag of myTags) {
  console.log(tag);
}

// 메소드로 태그 선택하기
const btns = document.getElementsByTagName('태그이름');
console.log(btns);

// css 선택자로 태그 선택하기
const myTag2 = document.querySelector('태그이름(class, id)');
console.log(myTag2);

const myTag3 = document.querySelectorAll('태그이름(class, id)');
console.log(myTag3);

// 이벤트 핸들링 (Event Handling)
decreaseBtn.onclick = function () {   // 이벤트 핸들러(Event Handler)
  console.log('버튼이 클릭되었습니다.');
};

