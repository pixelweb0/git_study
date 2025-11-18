// Scope: 범위, 영역

function myFunction() {     // 블록문 (Block Statement)
    let x = 3;              // 로컬 변수, 지역 변수 (Local Variables)
    console.log(x);
}

myFunction();

console.log('--------------------------------');

let y = 3;                   // 글로벌 변수, 전역 변수 (Global Variables)
function myFunction2() {     // 블록문 (Block Statement)
    let y = 5;               // 로컬 변수, 지역 변수 (Local Variables)
    console.log(y);
}

myFunction2();
console.log(y);