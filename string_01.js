const name = "Priyanshu"
const age = 21

// console.log("My name is " + name + " and my Age is " + age);

// console.log(`My name is ${name} and my age is ${age}`);

const gameName = new String('Priyanshu')

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
// console.log(gameName.bold());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,6)
console.log(newString);

const anotherString = gameName.slice(0,6)
console.log(anotherString);

const anotherString1 = gameName.slice(-8,6)
console.log(anotherString1);

const anotherString2 = new String('    prince    ')
console.log(anotherString2.trim());

const url = new String("https://priyanshu.com//priyanshu singh")
console.log(url.replace(' ',''));
console.log(url.includes('singh'));
console.log(url.split('//'));