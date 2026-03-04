let arr=[1,2,3,4,5];
// sum of all elements in array
// 1+2+3+4+5=15
let rs=arr.reduce((p,c)=>{
    return p+c;
},0);
// console.log(rs);

const peop=[
    {name:"venki",age:"20"},
    {name:"sai",age:"22"},
    {name:"kiran",age:"21"},
];
const res=peop.reduce((p,c)=>c.age>p?c.age:p,0);
// console.log(res); //22

// create object using reduce

let fruts=["apple","banana","grapes","orange","apple","apple","banana","grapes","apple","banana","grapes","orange"];

const fre=fruts.reduce((p,c)=>{
    p[c]=(p[c]||0)+1;
    return p;
},{});
// console.log(fre);

let num=[1,2,3,4];


var pro=(numb)=>{
    return numb.reduce((p,c)=>{
        return p*c;
    },1)
};
let mul=pro(num);
console.log(mul);