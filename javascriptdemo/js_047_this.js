//js_047_this.js

//호출한 객체가 없을 경우에는 기본적으로 window객체이다.
console.log(this);

let member = {
  name: '홍길동',
  show: function () {
    console.log(this);
  },
};

//{name: '홍길동', show: ƒ}
member.show();

/////////////////////////////////////////////////////
let member2 = {
  name: '홍길동',
  show: () => {
    console.log(this);
  },
};

//window
member2.show();

function showThisName() {
  console.log(this);
}

//window
showThisName();

let showThisName2 = () => {
  console.log(this);
};

//window
showThisName2();

////////////////////////////////////////////////////
//이벤트에서 this
let btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
  //<button id='btn'>commit</button> true
  console.log(this, this == btn);
});

btn.addEventListener('click', () => {
  //window false
  console.log(this, this == btn);
});
/////////////////////////////////////////////////////////////
// call, apply, bind를 이용해서 this에 특정객체를 지정할 수 있음
/////////////////////////////////////////////////////////////

const hong = { name: '홍길동' };
const ive = { name: '안유진' };

///////////////////////
//call( ) : call메서드는 모든 함수에서 사용할 수 있으며 this값을 특정값으로 지정할 수 있다.

console.log('call()=============================================');
//{name: '홍길동'}
showThisName.call(hong);
//{name: '안유진'}
showThisName.call(ive);

//Arrow Function 일때 : window
showThisName2.call(hong);
//Arrow Function 일때 : window
showThisName2.call(ive);

function person(birthday, job) {
  this.birthday = birthday;
  this.job = job;
  console.log(this);
}

//window
person(2019, 'IT');

//this로 사용할 hong객체와 person함수의 매개변수에서 받을 인수를 넘긴다.
//{name : '홍길동', birthday : 2000, job : '프로그래머'}
person.call(hong, 2000, '프로그래머');

//this로 사용할 ive객체와 person함수의 매개변수에서 받을 인수를 넘긴다.
//{name: '안유진', birthday: 2021, job: '아이돌리더'}
person.call(ive, 2021, '아이돌리더');

///////////////////////////////////////////////////////////////////
//apply
// 1. apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 같다.
// 2. call은 일반적인 함수와 마찬가지로 매개변수로 직접 받지만 apply는 매개변수를 배열로 받는다.

console.log('apply()==============================');
//{name: '홍길동', birthday: 2000, job: '프로그래머'}
person.apply(hong, [2000, '프로그래머']);
//{name: '안유진', birthday: 2021, job: '아이돌리더'}
person.apply(ive, [2021, '아이돌리더']);

////////////////////////////////////////////////////////////////////
//bind
//1. call과 사용방법은 같으나 실행을 해야한다.

//{name: '홍길동', birthday: 2000, job: '프로그래머'}
let hongPerson = person.bind(hong, 2000, '프로그래머');
hongPerson();

//{name: '안유진', birthday: 2021, job: '아이돌리더'}
let ivePerson = person.bind(ive, 2021, '아이돌리더');
ivePerson();
