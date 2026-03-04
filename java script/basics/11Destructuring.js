var arr=[1,2,34,5];
// desturncuting

const [one,two,three,four]=arr;
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);

// set one =5 as default value and four=10 as default value
var akk=[1,2,3]
const [n1=5,n2,n3,n4=10]=arr;
// arrya contains only 3 elment n4 taks defaut value

// console.log(n1);
// console.log(n4);


// spead in destructure

const [a,...b]=akk;
// console.log(a);
// console.log(b);


var col=["red","blue","green","pink","white"];
const [c1,c2,c3]=col;
// console.log(c1);
// console.log(c2);
// console.log(c3);


// object destructuring we use {} to destructur the object
// variable name and object key name should be same

// object
const persion={
    name:"venki",
    age:19,
    fileld:"Editor",
    pro:true,
}

// destructure
const {name,age,...pro}=persion;

// console.log(name,age,pro);
// update the the object keys

const {name:n, age:ag, ...p}=persion;
// console.log(n,ag,p);
var detail={
    name:"venk",
    age:19,
    field:"editor:",
    ispro:true
};
const {name:p1,age:p2,ispro:p4}=detail;
// console.log(name,age,p4);

// function desturcturing

// create the object

var data={
    name:'venk',
    age:19,
    field:"editor"
}
// create the function desturcture the object as perameter
call=({name:n1,age:K,field:f})=>console.log(n1,K,f);
// call(data);


// function destructureing

// object 
var db={
    name:"box",
    item:["box1","box2"],
}
// advance desrtucture both obj and array
pri=({name:n1,item:[t1,t2],hh:w=30,w:h=40})=>console.log(n1,t1,t2,w,h);
// pri(db);




