let song=[
    {name:"badass",dur:"4.05"},
    {name:"rata",dur:"3.45"},
    {name:"vikram",dur:"4.00"},
    {name:"ulagam",dur:"3.50"}
];
// console.log(song.filter(song=>song.dur<4));

let comp=[
    {ram:"8",hdd:"100"},
    {ram:"16",hdd:"200"},
    {ram:"32",hdd:"400"},
    {ram:"64",hdd:"800"}
]
console.log(comp.filter(c=>c.ram>16));

let age=[12,18,14,25,36,78,15,18];
// console.log(age.filter(a=>a>=18))
const aud=(age)=> {
    return age>18;
}

const res=age.filter(aud);
// console.log(res);

const name=[
     "venki",
     'editor',
     "hello",
     "java",
     "pyth"

]

// console.log(name.filter(n=>n.length>4));