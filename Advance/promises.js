const promiseOne = new Promise(function(resolve,reject){
    // Do any async task 
    // DB Calls, Cryptography, Network
    setTimeout(function(){
        console.log('Async is Compeletd');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
}) 

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task 2 is Compeletd');
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Priyanshu Kumar Singh",email:"ps2894944@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error  = false
        if(!error){
            resolve({username:"Tony Stark",password:"123"})
        }else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("The Promise is either resolved or reject"))

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username:"Jon Snow",Position:"Lord Commander of Nights Watch"})
        } else {
            reject('ERROR:Something went wrong')
        }
    },1000)
})

async function ConsumePromiseFive(){
    const response = await promiseFive
    console.log(response);
};

ConsumePromiseFive()

// async function GetAllData(){
//     try {
//         const response = await fetch('https://api.github.com/users/priyanshu-iron')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E:',error);
//     }
// }

// GetAllData()

fetch('https://api.github.com/users/priyanshu-iron')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch(()=>{
    console.log("Error");
})