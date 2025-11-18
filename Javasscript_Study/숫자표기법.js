// 숫자 표기법

let millionaire = 1000000000;
let myNumber = 1e9;     // 지수 표기법 (1 * 10^9)

console.log(millionaire);
console.log(myNumber);
console.log(millionaire === myNumber);

// 지수 표기법 예시
console.log(23e5 === 2300000);
console.log(5.3e3 === 5300);
console.log(-6.1e8 === -610000000);

console.log(16e-5 === 0.00016);
console.log(3.5e-3 === 0.0035);
console.log(-9.1e-5 === -0.000091);


// 16진수법 (Hexadecimal)
let hex1 = 0xff;      // 255
let hex2 = 0xFF;      // 255

// 8진수법 (Octal)
let octal1 = 0o377;      // 255

// 2진수법 (Binary numeral system)
let binary = 0b11111111;      // 255

console.log(hex1);
console.log(hex2);
console.log(octal1);
console.log(binary);
