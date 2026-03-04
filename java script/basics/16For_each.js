let arr=[1,2,3,4,5,6];

// arr.forEach(arr=>console.log(arr*2));

// cptilize each word first character

let word=["gellow","world","python","java","javascript"];

const res=word.forEach((word,index,arr)=>{
    arr[index]=word[0].toUpperCase()+word.substring(1);
})

// console.log(word);

// crete a array
let k=[1,3,4,15,6];

// create the function
let sum=0;
let add=num=>sum+=num;

// for each function it call the function everytime with array element
k.forEach(add);

console.log(sum);