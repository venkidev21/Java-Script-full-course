const a=document.querySelector("a");
console.log(a.href);
// a.href intha method use panni
// attribur (given link) get pannikulam

// GETTING ATTRIBUTE VALUE

// next input la irukkura value pathi pakkalam
const t=document.querySelector("input");
// get type of input
// console.log(t.type);//text it will retun type like(email,text,password...etc)
// get value of input attribue
// console.log(t.value);//Value of the attrivute is return

// SETTING ATTRIBUTE VALUE
// href value ha chge panni spotfy ku poga vaikkanum
a.href="https://open.spotify.com/";

// input tag la default(hellow) value atha na (bye) mathanaum
t.value="bye";

// input type ha pass word nu change panna num 
t.type="password";

// set pace hoder set pannukla
console.log(t.placeholder="giev strong passord");

// use getAttribuete() to attribute value get  pannurathukku
console.log(a.getAttribute("href"));
console.log(t.getAttribute("type"));
console.log(t.getAttribute("placeholder"));

// nabha attribute ha set pannalam
// setAttribute(atName,AtVaue)
// set t type="email"
t.setAttribute("type","email");
console.log(t.type);
