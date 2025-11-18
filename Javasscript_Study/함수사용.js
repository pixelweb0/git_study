// 함수(function) 사용하기

/*
function 함수명(파라미터) {
  명령문;
  명령문;
};
함수 호출();
*/

function greeting(sentence) {
  console.log('HI');
  console.log('안녕');
  console.log('Guten Tag');
  console.log('Bonjour');
  console.log('Ciao');
  console.log('Olá');
  console.log('Merhaba');
  console.log('你好');
  console.log('こんにちは');
  console.log(sentence);
};

greeting('Hola');


function welcome(name) {
  console.log('안녕하세요 ' + name + '님');
};

welcome('홍길동');


function printSquare(x) {
  console.log(x * x);
};

printSquare(2);
printSquare(5);
printSquare(10);


// 여러 파라미터 사용하기
function numberSum(num1, num2) {
  console.log(num1 + num2);
};

numberSum(2, 3);

function introduce(name, birth, nationality, job) {
  console.log('안녕하세요~ 반갑습니다.!');
  console.log('제 이름은 ' + name + '입니다.');
  console.log('생년월일은 ' + birth + '이고,');
  console.log('국적은 ' + nationality + '입니다.');
  console.log('직업은 ' + job + '입니다.');
  console.log('잘 부탁드립니다.');
};

introduce('홍길동', '88.07.15', '대한민국', '트레이너');


// 유동값에 따른 방법
// function alertSomething(number) {
//   alert(`당신이 가장 좋아하는 숫자는 ${number} 입니다.`)
// };
// let number = prompt('가장 좋아하는 숫자는 무엇인가요?');
// alertSomething(number);