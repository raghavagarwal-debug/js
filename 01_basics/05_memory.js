// stack (primitive) heap(non-primitive)

let myYoutubename = "raghavcoder"

let anotherName = myYoutubename
anotherName = "raghavhelper"
console.log(myYoutubename);
console.log(anotherName);

let user1 = {
    email: "raghav@gmail.com",
    upi : "user@ybl"
}

let user2 = user1

user2.email = "raghav12@gmail.com"

console.log(user1.email);
console.log(user2.email);
