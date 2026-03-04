// every()
// The every() method tests whether all elements in the array pass 
// the test implemented by the provided function.
// It returns a Boolean value.
const num=[2,4,6,9,10];
const r=num.every(k=>k%2==0);
const someres=num.some(k=>k%2==0);
// console.log(r);
// console.log(someres);

let uer=[
    {fn:"venki",ln:"editor"},
    {fn:"venki",ln:"devloper"},
    {fn:"venki",ln:"designer"},
    {fn:"venki",ln:"tester"},
]

let rk=uer.every(k=>k.fn==="venki");//it reurn ture because all fn is venki
let ek=uer.every(k=>k.ln==="editor");//it return false because all ln is not editor
 console.log(rk);
 console.log(ek);

// some()
// The some() method tests whether at least one element in the array 
// passes the test implemented by the provided function. It returns a Boolean value.
// it return true if at least one element is true
// it return false if all element is false

let s=uer.some(k=>k.ln==="editor");// return ture atleat one field is editor
let sk=uer.some(k=>k.ln==="acotr");// return false because no one  field is not actor
console.log(s);
console.log(sk);
