// let myName = "raghav     "
// console.log(myName.truelength);


let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.raghav = function(){
    //console.log(`raghav is present in all objects`);
    
}

Array.prototype.heyRaghav = function(){
    //console.log(`raghav says hello`);
    
}

// heroPower.raghav()
myHeroes.raghav()
myHeroes.heyRaghav()
// heroPower.heyRaghav()

//Inheritance
const user = {
    name: "Raghav",
    email: 'chai@google.com'
}
const Techer = {
    makeVideo : true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "
String.prototype.truelength = function(){
    console.log(`${this}`); 
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.truelength()
"Raghav".truelength()
"iceTea".truelength()
