// create a map

const  mp=new Map();
// put the value
mp.set(2,3);
mp.set({name:"venki",age:19},"helow")
mp.set([1,2,3,4,],"arrays");
mp.set(function(){console.log("hello venki")},"function");
// console.log(mp);

// delete map elemnt
mp.delete(2);

// size of map
console.log(mp.size);

// clear all elemt
mp.clear;

mp.set("venki",1);
mp.set("leo",2);
mp.set("rolex",3);
mp.set("dilli",4);
mp.set("vikram",5);

console.log(mp);

// get map element
mp.get("leo");

// itreation on map
for(let [key,vl] of mp){
    console.log(key,vl);
}

mp.clear();

// Arrays to map
let arr=[[1,2],[2,3],[4,5],[6,7]];
let ak=new Map(arr);
console.log(ak);

// object to map
let obj={name:"venki",age:19,field:"pro&edit"};
let ob=new Map(Object.entries(obj));
console.log(ob);

// map to array
let mp1=[...ak];
console.log(mp1);