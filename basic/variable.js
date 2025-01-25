const accountId = 123                                                      //const cant be changed//
let accountEmail = "viraj@google.com"
var accountPassword = "1234"                                                 // rarely used var//
accountCity = "mumbai"
let accountstate;                                              //if value is undefined it will print nothing//
//accountId = 2//                         (not allowed)
console.log(accountId);
accountEmail = "hc@ji.com"
accountCity = "bengla"

console.log(accountEmail);                                   // below is alternative way for it// //table form is beeter to view//

console.table([accountEmail,accountId,accountPassword,accountCity,accountstate])

/*
always use const and let
prefer not to use var 
because of issue in block scope  and functional scope 
*/