// 참조형 복사하기 (Reference type Copy)

function cloneObject(obj) {
  let temp = {};

  for (let key in obj) {
    temp[key] = obj[key];
  }

  return temp;
};

let course1 = {
  title: '파이썬 프로그래밍 기초',
  language: 'Python',
};

let course2 = cloneObject(course1);
let course3 = cloneObject(course1);

course2.title = '알고리즘의 정석';
course3.title = '자바스크립트 프로그래밍 기초';

console.log(course1);
console.log(course2);
console.log(course3);
