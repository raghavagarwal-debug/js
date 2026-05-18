// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
// }

// const greeting = "Hello world!"
// for (const greet of greeting) {
//     console.log(`Each Char is ${greet}` );
// }

//MAPS

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States Of America")
// map.set('Fr', "France")

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);   
// }

// const myObject ={
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);
// }

// const myObj = {
//     js: "javascript",
//     cpp: "C++",
//     rb: "Ruby",
//     swift: "Swift by Apple"
// }

// for (const key in myObj) {
//   console.log(`${key} shortcut is for ${myObj[key]}`);
// }


// const  programming = ["js", "cpp", "rb", "py", "java"]
// for (const key in programming) {
//     console.log(programming[key]);
// }
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States Of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
    
// } )

// coding.forEach( (val) => {
//     console.log(val);
// } )

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: 'Javascript',
        languageFileName: 'js'
    },
    {
        languageName: "java",
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: "py"
    }
]

myCoding.forEach ( (item) => {
    console.log(item.languageName);
} )