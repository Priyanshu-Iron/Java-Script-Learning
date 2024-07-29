const user = {
    userName : "Priyanshu Singh",
    loginCount : 4,
    isLoggedIN : "Yes",

    getUserDetails : function(){
        // console.log("Inside getUserDetils");
        // console.log(`Username : ${this.userName}`);
        console.log(this);
    }
}

console.log(user.userName);
console.log(user.getUserDetails());

function users(userName,loginCount,isLoggedIN){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIN = isLoggedIN;

    this.greeting = function(){
        console.log(`Welcome ${this.userName}`);
    }
    return this
}

const userOne = new users("Tony Stark",12,true)
const userTwo = new users("Jon Snow",10,false)
console.log(userOne);
console.log(userTwo);