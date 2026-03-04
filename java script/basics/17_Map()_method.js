let arr=[1,2,3,4,4];
const dou=arr.map(a=>a*2);
// it does not change the original array
// console.log(arr);
// it create a new array
// console.log(dou);

// objects

let uer=[
    {fn:"venki",ln:"editor"},
    {fn:"venki",ln:"devloper"},
    {fn:"venki",ln:"designer"},
    {fn:"venki",ln:"tester"},
]
// object with map method
const obj=uer.map(us=>{
    return [us.fn,us.ln];
})


let ak=[1,2,3,4,5,6];

const sum=ak.map(a=>a*10);
console.log(sum);
