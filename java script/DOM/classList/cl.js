// .classList  is used to return the num ber of the class 
// for example if there are two classes it 
// will return both the classes
const k=document.querySelector("h1");
console.log(k.classList);
// h1 ha one classs "st"
const jk=document.querySelector("h2");
console.log(jk.classList);
// h2 has moew class "k jfh hfh"

// h3 has no class we can add st to h3 using js
const h3=document.querySelector("h3");
console.log(h3.classList);
// no classs fo h3
h3.classList.add("st");
// classList.add("") use panni class add agirukku
// h3 ku css applay agirukku
console.log(h3.classList);

// remove use panni class remove pannlam
// h1 ku classs remove pannanum
k.classList.remove("st");
 console.log(k.classList);
// css class remove agiduchu

// toggle use panni class add and remove pannlam
// iruntha class remove agum
// illana class add agum
k.classList.toggle("st");
console.log(k.classList);
// st class add agiduch
