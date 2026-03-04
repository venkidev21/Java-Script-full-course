const s1=Symbol('name');
const s2=Symbol('name');

// console.log(s1);;
// console.log(s2);
// console.log(s1===s2); // false

// symbol with object
const obj={};
obj[s1]="venki";
obj[s2]="editor";

// console.log(obj);

const sy1=Symbol();
const sy2=Symbol();

const venk={};
venk.age=19;
venk["field"]="editor";
venk["field"]="devloper";
venk[sy1]="venki";
venk[sy2]="java";
// console.log(venk);

const sym1=Symbol('foo');

const ob={}
ob[sym1]="hellow";
console.log(typeof sym1);
console.log(ob);
