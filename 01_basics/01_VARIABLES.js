const accountId = 144553
let accountEmail = "raghav@gmail.com"
var accountPassword = "123456"
accountCity = "Chakulia"
let accountState;

// accountId = 2

accountEmail = "sushma@gmail.com"
accountPassword = "2222"
accountCity = "Jamshedpur"

/*
prefer not to use var 
because of issue in block scope and functional scope.
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
