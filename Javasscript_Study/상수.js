// 상수 (constant)
/* 
상수는 변하지 않는 값을 저장하는 변수를 의미한다.
상수는 변수와 다르게 한번 값을 할당하면 변경할 수 없다.
상수는 const 키워드를 사용하여 선언한다.

암묵적인 룰 : 대문자_대문자
*/

const PI = 3.14;        // 원주율,
let radius = 0;         // 반지름

// 원의 넓이를 계산하는 함수
function calculateArea() {
    return PI * radius * radius;
}

// 반지름에 따라 원의 넓이를 출력하는 함수
function printArea() {
    return `반지름이 ${radius}일 때, 원의 넓이는 ${calculateArea()}`;
}

radius = 4;
console.log(printArea());

radius = 7;
console.log(printArea());

radius = 8;
console.log(printArea());



console.log('');
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0 && i % 5 ===0) {
        console.log(i);
    }
}
