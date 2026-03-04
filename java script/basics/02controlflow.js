// if(condition){
// code
// }else{
// code}

// switch(Expresstion){
//     case 1:
//         // code;
//     case 2:
//         // code;
//         default:
//             // code;

// }
var a=100;
switch(a){
    case 10:{
        console.log("IS 10");
        break;
    }
    case 20:
        console.log("Is 20");
        break;
    case 30 :
        console.log("is 30");
         break;
    case 40,50,60,70: 
        console.log("Is more tan 30");
        break;
    default:console.log(`the number is ${a}`);
}