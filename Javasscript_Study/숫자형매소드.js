// 숫자형 매소드

// Number
let myNumber = 0.3591;

// toFixed(n) : 소수점 자리수 지정
// string 타입으로 반환
console.log(myNumber.toFixed(1));
console.log(myNumber.toFixed(3));
console.log(myNumber.toFixed(7));
console.log(typeof myNumber.toFixed(7));

// string 타입을 숫자형으로 변환
console.log(Number(myNumber.toFixed(7)));
console.log(typeof Number(myNumber.toFixed(7)));

// 숫자형으로 변환하는 다른 방법
console.log(+myNumber.toFixed(7));

let myNumber2 = 255;

// toString(2~36) : 진수 변환
console.log(myNumber2.toString(2));
console.log(myNumber2.toString(8));
console.log(myNumber2.toString(16));
console.log(typeof myNumber2.toString(16));

console.log(255..toString(2));
console.log((255).toString(8));
console.log(myNumber2.toString(16));
