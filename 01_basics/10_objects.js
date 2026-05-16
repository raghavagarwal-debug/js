// singleton

// object literals
// Object.create
const mysym = Symbol("key1")

const Jsuser = {
    name: "Raghav",
    "full name": "Raghav Agarwal",
    [mysym]: "mykey1",
    age: 18,
    location: "Chakulia",
    email: "raghav@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mysym]);

Jsuser.email = "raghavagar@gmail.com";
// Object.freeze(Jsuser)
Jsuser.email = "game@gmail.com"
console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello Jsuser");
}

Jsuser.greetingTwo = function(){
    console.log(`hello jsuser, ${this.name}`);
    
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

// objects part 2

//const tinderUser = new Object()
const tinderUser = {} //non single ton object
tinderUser.id = "123abc"
tinderUser.name = "Raghav"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "raghav@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Raghav",
            lastName: "Agarwal"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "R@gmail.com"
    },
    {
        id: 1,
        email: "R@gmail.com"
    },
    {
        id: 1,
        email: "R@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.value(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// part 3 objects inc api json


const course = {
    course: "JS in hindi",
    price: "999",
    cousreInstrictor: "Raghav"
}

// course.cousreInstrictor

const {cousreInstrictor: instructor} = course

console.log(instructor);

// {
//     "name": "Raghav", 
//     "courseName": "JS in hindi",
//     "price": "free"
// }

