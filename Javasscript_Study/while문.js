// while문 (while statement)
/*
while (조건부분) {
  동작부분;
}
조건부분: 블린으로 변경하여 true일 때 반복, 
동작부분: 조건부분이 false가 될 때까지 반복.
*/

// case 1
let i = 1;
while (i <= 10) {
  console.log(`${i} Hello World`);
  i++;
}

for (let i = 1; i <= 10; i++) {
  console.log(`${i} Hello World`);
}

console.log('--------------------------------');

// case 2
let a = 30;
while (a % 7 !== 0) {
  a++;
}
console.log(a);