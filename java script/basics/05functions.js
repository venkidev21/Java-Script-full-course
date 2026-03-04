// function declaration
function hel(n){
    // console.log(`helloow ${n}`);
}
hel("venki");


var grd=function (n){
    return `hi ${n}`;
}

// console.log(grd("venki"));

function he(fn){
    const val=10;
    fn(val);
}
function val(n){
    // console.log(n);

}
he(val);
// function refenece 
var g=function (n){
    return `he nums is${n}`;
}
// console.log(g(100));
// method in js

// just crea a function
function call(){
    return `my name is ${persion.name} and iam ${persion.feld}`;
}
var persion={
    name:"venki",
    age:19,
    field:"editor",
    call,
}
// console.log(persion.call());

// arrow function
var add=(a,b)=>a+b;
// console.log(add(10,20));
var sub=(a,b)=>{
    return a-b;
}
// console.log(sub(20,10));

// function inside object

var obj={ //create an object
    name:"teantoxi",
    count:34,
    print:function (){ // method
        return `my team is ${this.name} and count is ${this.count}`;

    },
    
}
// console.log(obj.print());


// default variable
 mul=(a=1,b)=>(a*b);

console.log(mul(3,4,));
console.log(mul(4));


