// 형 변환(Type Conversion)
// 데이터를 하나의 데이터 타입에서 다른 데이터 타입으로 바꾸는 것.

// String, Number, Boolean
console.log('10' + '5');
console.log(10 + 5);

console.log('위의 코드를 형변환 해보자.---------');
console.log(Number('10') + Number('5'));
console.log(String(10) + String(5));

// 숫자 -> 문자열
console.log('----- 숫자 >> 문자열 -----');
let x = 123;
console.log(x);
console.log(String(x));
console.log(typeof x);
console.log(typeof String(x));

console.log('----- 블린 >> 문자열 -----');
let y = true;
console.log(y);
console.log(String(y));
console.log(typeof y);
console.log(typeof String(y));

console.log('----- 문자열 >> 숫자 -----');
let z = '문자';
console.log(z);
console.log(Number(z));
console.log(typeof z);
console.log(typeof Number(z));

console.log('----- 블린 >> 숫자 -----');
let v = true;
console.log(v);
console.log(Number(v));
console.log(typeof v);
console.log(typeof Number(v));

console.log('----- 문자열 >> 블린 -----');
let w = 'true';
console.log(w);
console.log(Boolean(w));
console.log(typeof w);
console.log(typeof Boolean(w));

console.log('----- 문자열 >> 블린 -----');
let u = '문자';     // 값이 비어있으면 false
console.log(u);
console.log(Boolean(u));
console.log(typeof u);
console.log(typeof Boolean(u));

console.log('----- 숫자 >> 블린 -----');
let t = 111;        // 0, NaN, Infinity 는 false
console.log(t);
console.log(Boolean(t));
console.log(typeof t);
console.log(typeof Boolean(t));

console.log('----- 자동 형변환 -----');
// 산술 연산자( +, -, *, /, %, ** )
console.log('----- 산술 연산자 -----');
console.log(4 + '5');      // 문자열 연산, 한쪽이라도 문자열이면 문자열 연산
console.log(4 + 2);        // 숫자 연산, 둘다 숫자이면 숫자 연산
console.log(4 - true);     // 숫자 연산, true는 1, false는 0
console.log(4 * false);    // 숫자 연산, false는 0
console.log(4 / '2');      // 숫자 연산, '2'는 2
console.log('4' ** true);  // 숫자 연산, true는 1
console.log(4 % 'two');    // 숫자 연산, 'two'는 NaN

// 관계비교 연산자( <, >, <=, >=)
console.log('----- 관계비교 연산자 -----');
console.log(2 < '3');       // 문자열 비교 연산자, '3'는 3, 2는 3보다 작음
console.log(2 > true);      // 숫자 비교 연산자, true는 1, 2는 1보다 큼
console.log('2' <= false);  // 문자열 비교 연산자, false는 0, '2'는 0보다 큼
console.log('two' >= 1);    // 문자열 비교 연산자, 'two'는 NaN, NaN은 1보다 작음

//NaN(Not a Number)는 수학적 연산이 안된다는 의미.

// 같음 비교 연산 ( ==, !=, ===, !== )
console.log('----- 같음 비교 연산 -----');
console.log(1 === '1');      // 일치, 불일치(!==)
console.log(1 === true);
console.log(1 == '1');       // 동등, 부등(!=)
console.log(1 == true);



