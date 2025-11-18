// 템플릿 문자열 (template strings)
// template: 일정한 툴, 형식

let year = 2025;
let month = 11;
let day = 1;
console.log('생년월일은 ' + year + '년 ' + month + '월 ' + day + '일 입니다.');
// 템플릿 문자로 출력하기
console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`);

console.log('--------------------------------');

let myNumber = 3;
function getTwice(x) {
    return x * 2;
}
console.log(`${myNumber}의 2배는 ${getTwice(myNumber)}입니다.`);









