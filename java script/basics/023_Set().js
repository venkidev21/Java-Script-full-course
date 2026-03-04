// creating an set
const arr=[1,2,3,4,5,6,6,7,8,7]
const st=new Set(arr);
// console.log(st);

let mySt=new Set()
// add the values using .add()
mySt.add("hellow")
mySt.add(2)
mySt.add("leoddass")
mySt.add({name:"leo",filed:"king"})

// get the size of the set
// console.log(mySt.size);

// check the value is present or not
console.log(mySt.has("hellow"));

// delete the value
mySt.has("2")

// itreation tough set
for(let i of mySt){
    console.log(i);
}

// task
let sk=new Set();
sk.add('a');
sk.add('b');
sk.add('c');
for(let i of sk){
    console.log(i);
}