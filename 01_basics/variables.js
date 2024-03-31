const account_id="987645"
let account_email="geet@google.com"
var account_password="123958"
account_city="jaipur"
let account_state; // value is not initialised so it will be treated as undefined in javascript

//account_id="34567" // not allowedto update const variable

console.log(account_id)

//to print in tabular form we use console.table

console.table([account_id,account_email,account_password,account_city,account_state])
/*
prefer not to use var
beacause of issue in block scope and functional scope
*/
