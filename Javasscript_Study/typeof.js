// typeof 연산자

/* 
주어진 값의 데이터 타입을 문자열로 반환하는 연산자.

typeof 값;

console.log(typeof 101);
console.log(typeof '101');
console.log(typeof 'Hello');
console.log(typeof true);
console.log(typeof 'true');
*/

let name = 'Lee';
function sayHello() {
    console.log('Hello');
}
console.log(typeof name);
console.log(typeof sayHello);

console.log('--------------------------------');

console.log(typeof 'HELLO' + 'LEE');
console.log(typeof 8 - 3);

console.log('----오류를 잡으려면 괄호()를 써야함----');

console.log(typeof ('HELLO' + 'LEE'));
console.log(typeof (8 - 3));

console.log('---------------번외---------------');
console.log(typeof typeof 101);
// console.log(typeof 'number'); 가 되므로 string

