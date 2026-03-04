// normal function
// function call(name){
//     return` hellow my name is ${name}`;
// }
// console.log(call(venki));

// arrow function

call=name=>{//if one perameter no need to use()
    return `my name is ${name}`;
}
// console.log(call("venki"));

calling=(name,age)=>{  //more than one prameter ()is must
    return `my name is ${name}
    age is ${age}`;
}
// console.log(calling("vanki",19));

// if only one line of code no need to use {} and return keyword
calling=(name,age)=> `my name is ${name} age is ${age}`;
// console.log(calling("vanki",19));

const double=n=>n*2;
// console.log(double(6));

setTimeout(()=>{//the function stop after 1sec(1000)
    console.clear();
    const date=new Date();
    // console.log(date.toLocaleTimeString());
},1000)
 setInterval(()=>{//the function run every 1sec(1000)
    // console.clear();
    const date=new Date();
    // console.log(date.toLocaleTimeString());
},1000)

setTimeout(()=>{
    console.log("hellow");
    setTimeout(()=>{
        console.log("hi");
        setTimeout(()=>{
            console.log("'venki'");
        },2000)
    },2000)
},2000)