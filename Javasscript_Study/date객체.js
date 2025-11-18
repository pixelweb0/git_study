// date 객체
let myDate = new Date();
console.log(myDate);
/* 
Wed Nov 12 2025 07:52:03 GMT+0900 (한국 표준시)
--- --- -- ---- -------- -------------------
요일 월   일 년도   시간      시간대
*/

// 특정값 전달하기
// let myDate2 = new Date(특정한 값);

// UTC 기준해서 몇초 지난 날짜 전달하기
let myDate2 = new Date(1000);     // 1970년 1월 1일 00:00:00 UTC + 1000ms
console.log(myDate2);

// 원하는날짜 전달하기
let myDate3 = new Date('2026-01-11');               // 2026년 1월 11일 00:00:00 (자정)
let myDate4 = new Date('2026-01-11T13:24:00Z');     // 2026년 1월 11일 13:24:00
console.log(myDate3);
console.log(myDate4);

// 소괄화 안에 날짜 전달하기
/*
new Date(YYYY, MM, DD, hh, mm, ss, ms) > 년, 월, 일, 시, 분, 초, 밀리초, 년 월 필수
MM: 0-11(1월 : 0, 12월 : 11), DD: 1-31, hh: 0-23, mm: 0-59, ss: 0-59, ms: 0-999
*/
let myDate5 = new Date(2026, 0, 11, 13, 24, 0, 0);
console.log(myDate5);

// 필요한 값만 가져오기
/*
Date.getTime() > "1970년 1월 1일 00:00:00 UTC" 이후 지난 밀리초 반환
"" 안에 있는 것을 타임스탬프(timestamp)라고 한다.
*/
let myDate6 = new Date(2025, 10, 12, 8, 26, 0, 0);
let today = new Date();
let timeDiff = today.getTime() - myDate6.getTime();

console.log(timeDiff + 'ms');
console.log(timeDiff + 's');
console.log(timeDiff / 1000 / 60 + 'm');
console.log(timeDiff / 1000 / 60 / 60 + 'h');

console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());

// 자동 날짜 수정
let myDate7 = new Date(2026, 1, 30); // 2026년 2월 30일
console.log(myDate7);                // 2026월 3월 2일 출력


