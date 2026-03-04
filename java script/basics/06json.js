// JSON file is with .JSON 
// it is jest like js object notation but key enclosed with double quates
// JSON is used to store and transport data
// JSON is used when data is sent from a server to a web page
// JSON is "self-describing" and easy to understand 

// create a js object
var obj={
    name:"venki",
    age:19,
    filed:"editor",
    addres:{
        city:"pallipalayam",
        dist:"erode",
        door:56,
    }
}
console.log(obj);
// stringify is used to conver OBEJECT to JSON
// parse is used to convert JSON to OBJECT
// convert object to JSON
var stringfy=JSON.stringify(obj)
console.log(stringfy);
// convet JSON TO OBJECT  using parse
console.log(JSON.parse(stringfy));