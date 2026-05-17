function sayMyName() {
    console.log("R");
console.log("A");
console.log("G");
console.log("H");
console.log("A");
console.log("V");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 4)
// console.log("Result: ", result);


function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Raghav"))
// console.log(loginUserMessage("Raghav"))


//part 2


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Raghav",
    price: 199
}
function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject ({
    username: "Sam",
    price: 299
})

const myNewArray = [200, 400, 600, 100]
function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200, 400, 500, 1000]));
