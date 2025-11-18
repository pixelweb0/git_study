// if문 (if statement)
/*
if (조건식) {
    조건식이 참(true)일 때 실행할 코드
}
*/

let temperature = 160;

if (temperature <= 0) {
    console.log('물이 업니다.');
} else if (temperature < 100) {
    console.log('물이 얼지도 끓지도 않습니다.');
} else if (temperature < 150) {
    console.log('물이 끓지 않습니다.');
} else {
    console.log('물이 모두 수증기가 되었습니다.');
}

