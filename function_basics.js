function myname(){
    console.log("M");
    console.log("A");
    console.log("C");
    console.log("B");
    console.log("O");
    console.log("O");
    console.log("K");
}
// myname()
// console.log(typeof myname());

// function addtwonumber(number1,number2){
//     console.log(number1+number2);
// }
// const result = addtwonumber(3,2)
// console.log(addtwonumber);

function addtwonumber(number1,number2){
    let result = number1+number2
    return result
}
const result = addtwonumber(3,2)
// console.log("Result : ",result);

function loginusermessage(username){
    if(!username){
        console.log("Please Enter Username");
        return
    }
    return`${username} just logged in`
}
// console.log(loginusermessage("Priyanshu"));

function carprice(val1,val2,...num1){
    return num1
}

// console.log(carprice(200,500,800,1000));

const user = {
    name  : "Priyanshu Singh",
    age : 21
}

function anyfunction(handelobject){
    console.log(`Username is ${user.name} and User age is ${user.age}.`);
}

// console.log(anyfunction());

function anyfunction_01(handelobject){
    console.log(`Username is ${handelobject.user} and User age is ${handelobject.age}.`);
}

anyfunction_01({
    user : "Prince Singh",
    age : 17
})

const newarray = [100,200,300,400,500]

function array(getarray){
    return getarray[3]
}

console.log(array(newarray));