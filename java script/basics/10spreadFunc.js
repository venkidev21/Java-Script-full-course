print=(a,b,c=6,d=4)=>{
    console.log(`a:${a}`);
    console.log(`b:${b}`);
    console.log(`c:${c}`);
    console.log(`d:${d}`);
}

// print(1,2,3,4);
console.log("hellow");
 var arr=['onr','two'];
//   print(arr);//undifined
//   print(...arr);  //(...)spread func


//copy array using (...)speard function
var arr=[1,2,3,4];
var b=["a","v","v"];

var c=[...arr,...b];
// console.log(c);

// console.log(...new Set(b)); //remove duplicate


// (...boj) spead in object
var obj1={
    k:"venki",
    a:20,
};

var obj2={
    name:"leo",
    age:24,
};

var merg={...obj1,...obj2};
// console.log(merg);

// var ak=[...obj1,...obj2];
// console.log(ak);

var arr=["hellow","hi"];
arr=["welcome",...arr];
arr=[...arr,...arr,"bye"];
// console.log(arr);

// rest function it give multipe arguments in js function

function pri(...args){
    console.log(args);
}

// pri(1,2,3,4,5,6,7);


function pri(n1,n2, ...args){
    console.log(`others is ${args}`);
    console.log(`n1 is ${n1}`);
    console.log(`n2 is ${n2}`);
}
pri(1,2,3,4,5,6,7);