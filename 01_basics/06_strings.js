const name = "raghav"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Raghav-hc');

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newString1 = "  Raghav  "
console.log(newString1);
console.log(newString1.trim());


const url = "https://raghav.com/raghav%20agarwal"
console.log(url.replace('%20', '_'));

console.log(url.includes('chutiya'));

console.log(gameName.split('_'))



