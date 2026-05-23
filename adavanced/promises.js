const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, crytography, network
    setTimeout(function()
{
    console.log('Async task is complete');
    resolve()
}, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
setTimeout(function(){
    resolve({username: "chai", email: 'chai@example.com'})
}, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const  promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'Raghav', email: 'raghav@gmnail.com'})
        }else{
            reject('ERROR : SOMETHING WENT WRONG')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The Promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'Raghav', password: "123"})
        }else{
            reject('Error: Raghav went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
   try {
     const respone = await promiseFive
     console.log(respone);
     
   } catch (error) {
    console.log(error);    
   }
}

consumePromiseFive()


async function getAllUsers(){
    try {
        const response  = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
    } catch (error) {
        console.log("E:", error);
    }
}
getAllUsers()



fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
})
.catch((error) => console.log(error)
)