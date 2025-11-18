// switch문 (switch statement)
/*
switch (비교값) {
  case 조건값1:
    동작부분;
    break;             // break문을 사용하여 빠져나온다.
  case 조건값2:
    동작부분;
    break;
  default:             // 조건값1, 조건값2 모두 조건이 아닐 때 실행할 동작부분
    동작부분;            // 생략가능
}
*/

let myChoice = 5;

switch (myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...');
    break;
  case 2:
    console.log('고야이를 선택한 당신, ...');
    break;
  case 3:
    console.log('코알라를 선택한 당신, ...');
    break;
  case 4:
    console.log('강아지를 선택한 당신, ...');
    break;
  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.');
}

