// for...in문 (for...in statement)
/*
for (변수 in 객체) {
  동작부분;
}
*/

let codeit = {
  name: '홍길동',
  bornYear: 2025,
  'born Year': 2000,
  isVeryNice: true,
  worstCourse: null,
  bestCourse: {
    title: '자바스크립트 프로그래밍 기초',
    language: 'JavaScript',
  }
};

for (let key in codeit) {      // key는 객체의 프로퍼티 키를 반환(string, 바꿀 수 있음)
  console.log(key);
  console.log(codeit[key]);
}