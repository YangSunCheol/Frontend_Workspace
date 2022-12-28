//js_043_proragation.js

document.querySelector('.red').onclick = (e) => {
  alert('red');
  // e.stopPropagation();
};

document.querySelector('.green').onclick = (e) => {
  alert('green');
  e.stopPropagation();
};

document.querySelector('.blue').onclick = (e) => {
  alert('blue');
  e.stopPropagation();
};

document.querySelector('a').onclick = (e) => {
  alert('집에가고싶다.');
  e.preventDefault();
  return false;
};

/*
[1] Event Progapation(이벤트 전파)
    1.캡쳐링(capturing phase) : 부모요소에서 Taget요소로 이벤트 전파
    2.버블링(bubbling phase) : Taget요소에서 부모요소로 이벤트 전파

[2] 이벤트 차단
 stopPropagation()

[3] stopPropagation()와 preventDefault()비교
stopPropagation() : 이벤트 전파 차단 return false(jQuery)
preventDefault () : 디폴트 이벤트 차단 return false(javascript, jQuery)

//https://swimjiy.github.io/2018-10-04-js-event-method


*/
