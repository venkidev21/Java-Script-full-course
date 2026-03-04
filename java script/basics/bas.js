// alert("hellow");
// var a=document.getElementById("he");
// a.innerText("hellow");
console.log("hellow");
console.table({name:"venki",age:40});
console.clear();
console.log();
// !===
// Basic operations 
var a=10;
var b=100;
console.log("a>b");
console.log(a>b);
console.log("a<b");
console.log(a<b);
console.log("a<=b");
console.log(a<=b);
console.log("a===b");
console.log(a===b);
console.clear();

// js Strings
var fn="venki";
var ln="editor";

var name=fn.concat(ln);
name+=" edit     ";
console.log(name);
console.log(name.length );
console.log(name.toUpperCase());
console.log(name.slice(5,name.length-1));
var k=name.split("i");
console.log(k);
console.log(k.join("-"));
console.log(name.includes("v"));
console.log(name.includes("h"));
console.log(name.trim());
console.clear();

var fn="thapathy";
var ln="vijay";
var ful=fn+" "+ln;
var up=ful.toUpperCase();
// var msg=fav actor is ${up}, ;
var msg = `Fav actor is ${up},`;
msg+=' is best movie is master';
console.log(msg);
console.clear();


// String to Number
var f="hnjj";
var k="";
console.log(typeof f);
k=+f;
console.log(f);
console.log(typeof f);

// number to string
var n=100;
n=String(n);
console.log(n);
console.log(typeof n);

// convert string to float
var n="100.667";
n=parseFloat(n);
console.log(n);
console.log(typeof n);








