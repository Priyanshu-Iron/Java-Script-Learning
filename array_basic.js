//======Array======//

// console.log(Array);

const myarr1 = ["Jon Snow","Robb Stark","Ned Stark"]
// console.log(myarr1);
// console.log(myarr1[0]);

const myarr = [0,1,2,3,4,5]
// console.log(myarr);
//Array Method
myarr.push(6)
// console.log(myarr);
myarr.pop()
// console.log(myarr);

const newarr = myarr.join()
// console.log(typeof(newarr));
const myar1 = myarr.slice(1,3)
// console.log(myar1);
const myar2 = myarr.splice(1,3)
// console.log(myar2);

const marvel_heroes = ["Ironman","Captain America","Thor"]
// console.log(marvel_heroes);

const dc_heroes = ["Superman","Batman","Aquaman"]
// console.log(dc_heroes);

// const heroes = marvel_heroes.concat(dc_heroes)
// console.log(heroes);

const heroes = [...dc_heroes,...marvel_heroes]
// console.log(heroes);

console.log(Array.isArray("Priyanshu"));
console.log(Array.from("Priyanshu"));
console.log(Array.from({name : "Priyanshu"}));

let num1 = 100
let num2 = 200
let num3 = 300

console.log(Array.of(num1,num2,num3));