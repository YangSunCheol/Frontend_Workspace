//js_036_dom.js

let pNode = document.getElementById('wrap');
//1 P null
console.log(`${pNode.nodeType} ${pNode.nodeName} ${pNode.nodeValue}`);

//속성
let pAttr = pNode.attributes;
//NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}
console.log(pAttr);
console.log(pAttr[0]); // id='wrap'
console.log(pAttr['id']); // id='wrap'
console.log(pAttr.id); // id='wrap'
console.log(pAttr['length']); //2
console.log(pAttr.length); // 2
console.log(pAttr['class']); // class='chk'
console.log(pAttr.class); // class='chk'

console.log(pNode.getAttribute('class')); // chk
console.log(pNode.class); // undefined
console.log(pNode.getAttribute('id')); //wrap
console.log(pNode.id); // wrap

console.log(`${pAttr[0].nodeType} ${pAttr[0].nodeName} ${pAttr[0].nodeValue}`); //2 id wrap

//
let textNode = pNode.firstChild;
console.log(textNode); //#text
console.log(`${textNode.nodeType} ${textNode.nodeName} ${textNode.nodeValue}`); // #text content

///////////////////////////////////////////////////////////////////////////////////////////
//innerText, innerHTML : 요소의 컨텐츠

let bodyNode = document.getElementsByTagName('body')[0];

//content
console.log(bodyNode.innerText); // content
// console.log(bodyNode.innerHTML);

// bodyNode.innerText = '<p>append</p>';
// bodyNode.innerHTML = '<p>append</p>';

////////////////////////////////////////////////////////////////////////////////////////////
//value

let fname = document.querySelector('#fname');
console.log(fname.value); //홍길동

fname.value = '고수';
