// first list item
let fli=document.querySelector("li");
// console.log(fli);
// first parent element ha select panna 
// console.log(`chiled element is ${fli.tagName} and parent element is 
    // ${fli.parentElement.tagName}`);
// console.log(fli.parentElement);
// console.log(fli.parentElement.parentElement);

// Children elements
let ul=document.querySelector("ul");
// console.log(ul.children);
// console.log(ul.children[0]);
// console.log(ul.children[1]);
// console.log(ul.children[2]);
// console.log(ul.children[3].innerText="ONE");
// console.log(ul.children);

// Sibling elements
// console.log(fli.nextElementSibling.innerText);
// use of nextElementSibling
// it is used to select the next sibling element of the selected element


// privious sibling element
let fourLi=document.querySelector(".four");
console.log(fourLi.innerText);
//use of previousElementSibling
console.log(fourLi.previousElementSibling.innerText);
console.log(fourLi.previousElementSibling.previousElementSibling.innerText);

// it is used to select the previous sibling element of the selected element


// All need functions and usage of pare,chinde sibling elements are given below

// parentElement
// children
// nextElementSibling
// previousElementSibling