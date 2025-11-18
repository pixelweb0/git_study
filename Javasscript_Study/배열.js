// 배열 (array)
/*
let 변수 = [값(요소)1, 값(요소)2, 값(요소)3, ...];
대괄호로 묶어서 선언, 값은 쉼표로 구분, 순서가 있음
*/

let coursRanking = [
  '자바스크립트 프로그래밍 기초',
  'Git으로 배우는 버전 관리',
  '컴퓨터 개론',
  '파이썬 프로그래밍 기초',
];

// Index == Position == 순서 == indexing (0부터 시작)
// console.log(배열이름[index]);
console.log(coursRanking[2]);
console.log(coursRanking[2 + 1]);

// 예시
let fruits = ['사과', '바나나', '딸기', '포도'];
console.log(fruits[0]);

// length 속성
let members = ['홍길동', '이순신', '유관순', '강감찬', '이성계'];
console.log(members.length);
console.log(members['length']);
console.log(members[members.length - 1]);   // 마지막 요소 출력

// 배열 요소 추가
members[5] = '최영';
console.log(members[5]);

// 배열 요소 수정
members[0] = '김철수';
console.log(members[0]);

// 배열 요소 삭제
delete members[4];          // empty 값으로 출력, 배열 요소 완벽하게 삭제 아님.
console.log(members);

// splice 메서드
let numbers = [1, 2, 3, 4, 5];
numbers.splice(4);         // 4번째 요소부터 삭제 (0번째 요소부터 시작)
console.log(numbers);

// splice 메서드 예시2
let numbers2 = [1, 2, 3, 4, 5];
numbers2.splice(2, 2);         // 2번째 요소부터 2개 요소 삭제 (2번째 요소부터 시작)
console.log(numbers2);

// splice(startIndex, deletecount, item)
let members2 = ['홍길동', '이순신', '이철수', '강감찬', '이성계'];
console.log(members2);

members2.splice(2, 0, '최영');         // 2번째 요소부터 0개 요소 삭제 (2번째 요소부터 시작)
console.log(members2);

members2.splice(3, 1, '유관순', '뱀범김구'); // 4번째 요소부터 1개 요소 삭제 후, 유관순, 뱀범김구 추가 (4번째 요소부터 시작)
console.log(members2);


let zooAnimals = ['사자', '호랑이', '펭귄', '코끼리', '기린'];
console.log(zooAnimals);

// 배열의 첫 요소를 삭제 : shift 메서드
zooAnimals.shift();
console.log(zooAnimals);

// 배열의 마지막 요소를 삭제 : pop 메서드
zooAnimals.pop();
console.log(zooAnimals);

// 배열의 첫 요소를 추가 : unshift 메서드, unshift(value)
zooAnimals.unshift('코알라');
console.log(zooAnimals);

// 배열의 마지막 요소를 추가 : push 메서드, push(value)
zooAnimals.push('원숭이');
console.log(zooAnimals);



