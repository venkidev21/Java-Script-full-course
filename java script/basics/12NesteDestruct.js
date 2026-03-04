// create and array that contains multiple objects

const arr=[//Arrays of objects
    {name:"leo",director:"loki"},
    {name:"kadaisi",director:"mani"},
    {name:"lik",director:"vs"},
    {name:"retro",director:"ksr"},
    {name:"f1",director:"leodass"},
    {name:"kaththi",director:"arm"},
]
// i wat 3rd object property od director so give 3 spase 
const [ , ,{director:d}, , ,{name:n}]=arr;
// console.log(d);
// console.log(n);

// nested object destructuring
var data={
    user:{
        name:"venk",
        age:119
    },
    hobi:['editing','coding','gym'],
    address:{
        city:"erode",
        st:'taminadu',
    },
    lang:['tamil','englis']
}
// above objectconntais multiple object inside

const {
    user:{name,age},
    hobi:[h1,h2],
    address:{city,st},
    lang:[l1,l2]
}=data;
console.log(h1);