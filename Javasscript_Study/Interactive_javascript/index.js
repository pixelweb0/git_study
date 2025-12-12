const myNumText = document.querySelector('#myNumber');
const btnDec = document.querySelector('#decrease');
const btnInc = document.querySelector('#increase');
const btnColor = document.querySelectorAll('.color-btn');


let myNum = 0;

btnDec.onclick = function () {
  myNum--;
  myNumText.textContent = myNum;
}

btnInc.onclick = function () {
  myNum++;
  myNumText.textContent = myNum;
}

for (let btn of btnColor) {
  btn.onclick = function () {
    myNumText.style.color = btn.dataset.color;
  }
}