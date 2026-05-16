//array

const myArr = [0, 1, 2, 3, 4, 5,]
const myHeroes = ["Shaktiman", "Raghav"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[0]);

//array methods 

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift();

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(4));

// const newArr = myArr.join()

// console.log(newArr);
// console.log(myArr);

//slice, splice 

//console.log("A", myArr);

const myn1  = myArr.slice(1,3)

//console.log(myn1);
//console.log("B", myArr);

const myn2 = myArr.splice(1,3)
//console.log("C", myArr);
//console.log(myn2);

// slice does not manipulate the array but splice manipulate the array it change the array.

const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

//marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allheroes = marvel_heroes.concat(dc_heroes);
// console.log(allheroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("Raghav"));
console.log(Array.from("Raghav"));
console.log(Array.from({name: "Raghav"})); //intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));