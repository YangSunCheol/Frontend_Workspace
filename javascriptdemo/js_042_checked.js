//js_042_checked.js

function Calculator() {
  let total = Number(document.getElementById('total').defaultValue);

  for (let i = 1; i <= 3; i++) {
    let chkbox = document.getElementById('opt' + i);
    if (chkbox.checked) {
      total += Number(chkbox.value);
    }
    document.getElementById('total').value = total;
  }
}
for (let i = 1; i <= 3; i++) {
  let check = document.getElementById('opt' + i);
  check.onclick = Calculator;
}

/*
let totalCar = document.getElementById('total');
let chbCnt = document.querySelectorAll(`tbody input[type="checkbox"]`);
conseole.log(chbCnt); //NodeList

//NodeList을 Array로 변환]
let myChb = [...chbCnt];

//checkbox에 onclick이벤트가 발생되었을때 수행될 carCount()을 등록
myChb.map((element) => {
  //window
  //console.log(this);
  element.onclick = carCount;
});

function carCount() {
  //this는 현재 이벤트가 발생된 checkbox 객체를 나타냄
  // console.log(this);
  // console.log(this.id);

  //   defaultValue는 <input>에 초기에 입력된 value의 값을 기억해 가져온다.

  let basicCar = Number(totalCar.defaultValue);

  myChb.map((element) => {
    if (element.checked) basicCar += Number(element.value);
  });

  totalCar.value = basicCar;
}

*/
