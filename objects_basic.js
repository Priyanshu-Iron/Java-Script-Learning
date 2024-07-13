//======Objects======//
//1.Singleton
//2.Objects Literals

//------Objects Literals------//
const obj = {
    fname : "Priyanshu",
    lname : "Singh",
    age : 21,
    education : "Under Gradution",
    email : "ps28949442gmail.com",
    virgin : true
}

// console.log(obj);
// console.log(typeof(obj));
// console.log(obj1.fname);
// console.log(obj1["fname"]);

obj.email = "priyanshu.22scse1430020@galgotiasuniversity.edu.in"
// console.log(obj);
// Object.freeze(obj)
obj.email = "priyanshu@microsoft.com"
// console.log(obj);

obj.greeting1 = function(){
    console.log("Hello User");
}
// console.log(obj.greeting1());

obj.greeting2 = function(){
    console.log(`Hello ${this.fname}`);
}
// console.log(obj.greeting2());

//------Singleton------//
//const tinderuser = new Object()

const tinderuser = {}
tinderuser.id = 9354
tinderuser.name = "Priyanshu"
tinderuser.age = 21
tinderuser.isLoggedIn = true

// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));

const newuser = {
    email : "ps2894944@gmail.com",
    fullname : {
        fname : "Priyanshu",
        lname : "singh"
    }
}

// console.log(newuser);
// console.log(newuser.fullname);
// console.log(newuser.fullname.lname);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const user = [
    {
        id : 1,
        name : "Naruto Uzumaki"
    },
    {
        id : 2,
        name : "Sasuke Uchiha"
    },
    {
        id : 3,
        name : "Itachi Uchiha"
    }
]
// console.log(user);
user[1].name

//------Objects Destructrions------//
const course = {
    coursename : "JavaScript",
    coursefee : 990,
    coursetype : "online",
    courseInstructor : "Prince Singh"
}

// console.log(course);
const {coursetype} = course
// console.log(coursetype);
const {courseInstructor: instructor} = course
console.log(instructor);