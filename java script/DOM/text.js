const p = document.querySelector("p");
console.log(p.textContent);
console.log(p.innerHTMLt);

// chage the text 
// p.innerText="textC Changet";

// chage the specifix text using tag name 
// chage the text only in strong tage
const k = document.querySelector("h1");
k.innerText = "   text Changed bro   "
k.innerHTML = "<em>123</em>"

// innrt text use panni nabha change content  and access contect only

// InnerHTML la nabha entire tag um add pannamam and cage access pannikulam 
 console.log(k.innerText);  //op  123
console.log(k.innerHTML);   //op  <em>123</em>
console.log(k.textContent);

const f = document.querySelector("p");
console.log(f.innerHTML);
const b = document.querySelector(".b");
console.log(b.textContent);
const c = document.querySelector(".c");
console.log(c.innerText);