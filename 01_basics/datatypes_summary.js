//Primitive

// 7 types:- String ,Number,Boolean,null,undefined,Symbol(unique),BigInt

const score=100;
const scorevalue=100.8
const isloggedIn=false
let email  //Undefined

const id= Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId);  //Output:- False



//Reference (Non PRimitive)

//Array,Objects,Functions

const heroes=["Shaktiman","Nagraj","doga"]

let myobject={
    name:"Geetanjali",
    agr:20,
    iseligible:true
}

const muFunction=function(){
    console.log("Hello World")
}