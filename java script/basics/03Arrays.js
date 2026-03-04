var a = [1, 2, 3, 5];

// a.pop(5);
// a.push(8);
// a.unshift(0);
// a.shift();
a.includes(3);

// console.log(a.includes(3));

// nested Arrays OR 2D arrays
var d=[1,2,3,[6,5,4]];
// console.log(d[3][2]);
var  sing=["Arr","ani","sana"];
for(var i=0;i<sing.length;i++){
    // console.log(sing[i]);
}
var fav=[];
for(var i=0;i<3;i++){
     fav.push(i);
}

var mix=['a',1,"veenki",true,false];
mix.sort();
mix=mix.concat(mix);
mix.reverse();
mix.sort()
// console.log(mix);
// var d2=[[]];
// for(var i=0;i<3;i++){
//     for(var j=0;j<3;j++){
//         d2[i][j]=i+j;
//     }
// }
// console.log(d2);

// for of loop
var arr=[1,2,3,4,5];
for(let i of arr){
    // console.log(i);
}

// for each loop

arr.forEach((element,index) => {
    // console.log(element,index,array);
});

// spilce method
arr.splice(2,1,"hellow");
console.log(arr);

