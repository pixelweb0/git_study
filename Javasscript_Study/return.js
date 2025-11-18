// return문
function getTwo() {
  return 2;
};
console.log(getTwo());
console.log(2);


function getTwice(number) {
  return number * 2;
}
console.log(getTwice(5));
console.log(10);


function getTwice2(number) {
   return number * 2;
}
let x = getTwice(5);  // 10
let y = getTwice(2);  // 4
console.log(x * y);  // 40


function square(x) {
  console.log('return 전');
  return x * x;
  console.log('return 후');     // Dead Code(쓸모없는 코드)
}
console.log('함수 호출 전');
console.log(square(3));
console.log('함수 호출 후');

console.log('--------------------------------');

function printSquare(a) {
  console.log(a * a);
}

function getSquare(a) {
  return a * a;
}

// printSquare(3);
// getSquare(3);
//console.log(getSquare(3));
console.log(printSquare(3));

