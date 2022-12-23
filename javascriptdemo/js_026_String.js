//js_026_String.js

let data = 'It`s alright';
console.log(data);

//length : 문자열의 길이
console.log(data.length);

/*
    특정 범위 데이터를 리턴해주는 3가지 메소드
    1. substring(start, end);
    2. substr(start, length);
    3. slice(start, end);
*/

data = 'Apple, Banana, Kiwi';

// 7인덱스 부터 13 인덱스 미만
console.log(`substring: ${data.substring(7, 13)}`); //Banana
//substring()은 음수값을 지원하지 않는다.
console.log(`substring: ${data.substring(-12, -6)}`);

console.log(`substr: ${data.substr(7, 6)}`); //Banana

console.log(`substr: ${data.substr(-12, 6)}`); //Banana

console.log(`slice: ${data.slice(7, 13)}`); //Banana

console.log(`slice: ${data.slice(-12, -6)}`); //Banana

console.log(`data:${data}`);

//replace('찾을 문자열|RegExp', '바꿀 문자열');
// i: 대소문자 구분없음, g: 모든 문자열

console.log(`replace: ${data.replace('Banana', 'Grape')}`); //Apple, Grape, Kiwi

console.log(`data:${data}`); //Apple, Banana, Kiwi

data = 'Mr Blue has a blue house and a blue car';

console.log(data.replace(/blue/, 'red')); //Mr Blue has a red house and a blue car

console.log(data.replace(/blue/g, 'red')); //Mr Blue has a red house and a red car

console.log(data.replace(/blue/i, 'red')); //Mr red has a blue house and a blue car

console.log(data.replace(/blue/gi, 'red'));
