const userEmail = "raghav@gmail.com"
const array = []
if(userEmail) {
    console.log("Got user email");
} else { 
    console.log("Dont have the user email");
}

// flasy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// if(array.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
console.log("Object is empty");
}

// Nullish Coalscing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);


// ternary operator 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
