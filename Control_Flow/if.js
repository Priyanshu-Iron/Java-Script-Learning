//Conditonal Statment
//if Statment

const temperature = 50
if(temperature=>40){
    console.log("Temperature is 40");
}else{
    console.log("Temperature is greater than 40");
}

const score = 200
if(score=>100){
    let power = "fly"
    console.log(`Use Power : ${power}`);
}else{
    console.log("Cant Fly");
}

const userloggedIn = true
const debitcard = true
const loggedIngoogle = false
const loggedInemail = true

if(userloggedIn && debitcard && 2==3 ){
    console.log("Allow to buy Course");
}else if(loggedIngoogle || loggedInemail || true){
    console.log("User Logged In");
}