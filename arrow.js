const user = {
    username : "Priyanshu Singh",
    age : 21,

    welcomemessage : function(){
        console.log(`${this.username} Welcome User`);
    }
}

// console.log(user);
// user.welcomemessage()
// user.username = "Prince"
// user.welcomemessage()

const addtwonum = (num1,num2) => {
    return num1+num2
}
console.log(addtwonum(2,3));

const addthreenum = (num1,num2,num3) => (num1+num2+num3)

console.log(addthreenum(2,3,4));