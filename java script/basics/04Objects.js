var  det={
    name:"venki",
    age:119,
    hoobby:"editor",
    cllass:'A',
    ispro:true,
};
// console.log(det.age);
// console.log(det['name']);

let car={
    name:"bmw",
    mod:123,
    col:"red",
}
// console.log(car.name);
// update
car.name="audi";
// console.log(car);
delete car.mod;
// for loop
for(let key in car){
    // console.log(key,car[key]);
}

Object.entries(car).forEach(([key,value])=>{
    // console.log(key,value);
})

user=(name,age,work)=>{
    return {
        name:name,
        age:age,
        work:work,
    }
}
var vank=user("venki",19,"editor");
var leo=user("leo",20,"don");
// console.log(vank);
// console.log(leo);

var a=10;
var b=20;
var c=30;
 var obj={a,b,c};//embeted objcet
// console.log(obj);

// objrct with fumction
var lib={//object
    sum:(a,b)=>a+b,//function
    mul:(a,b)=>a*b,
    div:(a,b)=>a/b,
};
// console.log(lib.mul(2,3));


persion=(name,age,year)=>{
    return{name,age,year}};
// console.log(persion("venki",19,2006));


