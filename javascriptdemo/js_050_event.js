//js_050_time.js

let btn = document.querySelector('button');

console.log('start');
btn.addEventListener(
  'click',
  function () {
    console.log('addEventListener');
  },
  false
);

console.log('end');
