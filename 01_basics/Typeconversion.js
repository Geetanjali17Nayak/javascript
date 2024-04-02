let score="33" //string

console.log(typeof score);
console.log(typeof (score));

let valueInNumber=Number(score);
console.log(typeof valueInNumber); //number
console.log(valueInNumber)



let score2="33abc" //string

console.log(typeof score2);
console.log(typeof (score2));

let valueInNumber2=Number(score2);
console.log(typeof valueInNumber2); //number
console.log(valueInNumber2) //NaN


let score3=null 

console.log(typeof score3);
console.log(typeof (score3));

let valueInNumber3=Number(score3);
console.log(typeof valueInNumber3); //number
console.log(valueInNumber3) //0



//"33"=> 33
//"33abc"=>NaN(not a number)
//true=> 1 , false=>0
//null=>0
//undefined=>NaN


let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


//1=>true; 0->false
//""=>false
//any value=>true