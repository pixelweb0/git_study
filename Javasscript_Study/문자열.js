// 문자열

console.log(7);
console.log(3.14);
console.log('안녕하세요');
console.log(`"안녕하세요"`);
const text = `
  Hello World
  Hello World
`;
console.log(text);
console.log('Hello' + 'World');
console.log('3' + '5');


// 심화
// String
let myString = 'Hello World ';

// 요소 접근
console.log(myString[3]);             // 대괄호 표기법
console.log(myString.charAt(3));      // charAt 메서드

// 문자열 길이
console.log(myString.length);         // length 프로퍼티

// 요소 탐색
console.log(myString.indexOf('e'));   // indexOf 메서드 (앞 부터)
console.log(myString.indexOf('e'));   // lastIndexOf 메서드 (뒤 부터)
console.log(myString.indexOf('a'));   // 없는 요소 탐색 시 -1 반환

// 대소문자 변환
console.log(myString.toUpperCase());   // toUpperCase 메서드
console.log(myString.toLowerCase());   // toLowerCase 메서드

// 양 끝 공백 제거
console.log(myString.trim());          // trim 메서드

// 부분 문자열 접근 slice(start, end)
console.log(myString.slice(0, 5));     // slice 메서드
console.log(myString.slice(6, 11));    // slice 메서드