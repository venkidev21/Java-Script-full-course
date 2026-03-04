// Year,month,date,hours,minutes,seconds,milliseconds
var date =new Date();
// console.log(date);
const da=date.getFullYear();
// console.log(da);
const mo=date.getMonth()+1;
// console.log(mo);
const day=date.getDay();
// console.log(ay);
const hor=date.getHours();
// console.log(hor);
const min=date.getMinutes();
// console.log(min);
const se=date.getSeconds();
// console.log(se);
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toLocaleString());

// we can set date
date.setDate(date.getDate()+1);
// console.log(date);

// SetIntevel we can set the inerval the fuction execute after the time
setInterval(()=>{
   console.log(date.getSeconds())},1000);

// setTimeout we can set the time to execute the function
setTimeout(()=>{
    console.log("function run");
},5000);

