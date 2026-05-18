// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })
// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// const newNums= []

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// } )
// console.log(newNums);

// const books = [
//     { title: 'Book One', genre: 'fiction', publish: 1981, edition: 2004},
//     { title: 'Book Two', genre: 'non-fiction', publish: 1982, edition: 2005},
//     { title: 'Book Three', genre: 'science', publish: 1983, edition: 2006},
//     { title: 'Book Four', genre: 'imaginary', publish: 1984, edition: 2007},
//     { title: 'Book Five', genre: 'fiction', publish: 1985, edition: 2008},
//     { title: 'Book Six', genre: 'non-fiction', publish: 1986, edition: 2009},
//     { title: 'Book Seven', genre: 'non-fiction', publish: 1987, edition: 2010},
//     { title: 'Book Eight', genre: 'science', publish: 1988, edition: 2011},
//     { title: 'Book Nine', genre: 'fiction', publish: 1989, edition: 2012},
// ];

// let userBooks = books.filter( (bk) => bk.genre === 'science')
//  userBooks = books.filter ((bk) => bk.publish >= 1985 && bk.genre === 'science' )
// console.log(userBooks);


// const myNumbers = [1, 2, 3, 4,5, 6, 7, 8, 9, 10]

// const newnums = myNumbers.map( (num) => { return num + 10 })

// const newNums = myNumbers
// .map((num) => num * 10)
// .map((num) => num + 1)
// .filter( (num) => num>=40)
//  console.log(newNums);



// +++++++++++ REDUCE METHOD +++++++++++

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const add = shoppingCart.reduce( (acc, item) => acc + item.price,0)

console.log(add);


