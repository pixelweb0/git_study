/*
 Arrow Function

 arguments는 Arrow Function에서 사용할 수 없다.
*/

/*
const getTwice = (number) => {
  return number * 2;
}
console.log(getTwice(5));


위의 함수를 더 간결하게 가능하게 해주는 방법.

const getTwice = number => number * 2;
console.log(getTwice(5));
*/


const myBtn = document.querySelector('#myBtn');
myBtn.addEventListener('click', () => {
  console.log('button is clicked!');
})

/*
객체를 변환할 때는 소괄호 () 로 감싸주어야 한다.
*/
const getText = () => ({ name: 'John',});
console.log(getText());

