//js_035_dom.js

let myNode = document.getElementById('p2');
// <p id='p2'>content2</p>
console.log(myNode);
//myNode: [object HTMLParagraphElement]
console.log(`myNode: ${myNode}`);

let ptNode = myNode.parentNode;
//div#wrap
console.log(ptNode);
//ptNode: [object HTMLDivElement]
console.log(`ptNode: ${ptNode}`);

ptNode.style.color = 'blue';
////////////////////////////////////////////////////////////////////////
//previousSibling : 모든 노드를 검색한다.
let prevNode = myNode.previousSibling;
console.log(`prevNode:${prevNode}`);

prevNode = prevNode.previousSibling;
console.log(prevNode); //p#p1
console.log(`prevNode:${prevNode}`); //prevNode:[object HTMLParagraphElement]

/////////////////////////////////////////////////////////////////////////
//previousElementSibling : element node만 검색한다.
prevElementNode = myNode.previousElementSibling;
console.log(prevElementNode); //  <p id="p1">content1</p>
console.log(`${prevElementNode}`); //[object HTMLParagraphElement]

//////////////////////////////////////////////////////////////////////////
//nextSibling
let nextNode = myNode.nextSibling;
console.log(`${nextNode}`); //[object Text]

nextNode = nextNode.nextSibling;
console.log(`${nextNode}`); //[object HTMLParagraphElement]

//////////////////////////////////////////////////////////////////////////
//nextElementSibling
let nextElementSibling = myNode.nextElementSibling;
console.log(`${nextElementSibling}`); //[object HTMLParagraphElement]

//////////////////////////////////////////////////////////////////////////
//childNodes

let divNode = document.getElementById('wrap');
console.log(`${divNode}`); // [object HTMLDivElement]

let divChilesNode = divNode.childNodes;
console.log(`${divChilesNode}`); //[object NodeList]
console.log(divChilesNode); //NodeList(9) [text, p#p1, text, p#p2, text, p#p3, text, p#p4, text]

////////////////////////////////////////////////////////////////////////////
//children
let divChildren = divNode.children;
console.log(`${divChildren}`); // [object HTMLCollection]

console.log(divChildren); //HTMLCollection(4) [p#p1, p#p2, p#p3, p#p4, p1: p#p1, p2: p#p2, p3: p#p3, p4: p#p4]

let p4Node = document.querySelector('#p4');
// <p id='p4'>
console.log(p4Node);
console.log(`${p4Node}`); //[object HTMLParagraphElement]

let aNode = p4Node.firstElementChild;
console.log(aNode);
console.log(`${aNode}`); // [object HTMLImageElement]
////////////////////////////////////////////////////////////////////////////////
// 객체.getAttribute('속성명'), 객체.setAttribute('속성명','값')
// 객체.속성명,  객체.속성명 = '값'

let aAttrNode = aNode.getAttribute('src');
console.log(aAttrNode); //images/ive.jpg

aAttrNode = aNode.src;
console.log(aAttrNode); //http://127.0.0.1:5500/javascriptdemo/images/ive.jpg

console.log(aNode.getAttribute('class'));
console.log(aNode.class);

// aNode.setAttribute('title', '4세대아이돌');
// console.log(aNode.getAttribute('title'));
// console.log(aNode.title);

// aNode.id = 'imgive';
// console.log(aNode.id);
// console.log(aNode.getAttribute('id'));

let aAttrList = aNode.getAttributeNode;
console.log(aAttrList.length);
console.log(aAttrList);
