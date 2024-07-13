//High Order Array Loop

//for of
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greetings = ["Hello World"]
for (const greets of greetings) {
    // console.log(greets);
}

const strings = "Hello World"
for (const str of strings) {
    // console.log(str);
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('RU',"Russia")

// console.log(map);

for (const [maps,value] of map) {
    // console.log(maps);
    // console.log(maps, ":-", value);
}

//for in
const myobject = {
    R : "Ruby",
    js : "Java Script",
    cpp : "C++",
    swift : "Apple"
}

for (const key in myobject) {
    // console.log(key, ":-" ,myobject[key]);
}

const coding = ["Java","Python","c","c++"]
for (const key in coding) {
    // console.log(coding[key]);
}

//for each
const laptop = ["MacBook","Lenovo","Dell","HP"]
laptop.forEach(function(val) {
    // console.log(val);
});

laptop.forEach(item => {
    // console.log(item);
});

const codinglanguage = [
    {
        langauageName : "JavaScript",
        langauageFileName : "js"
    },
    {
        langauageName : "Java",
        langauageFileName : "java"
    },
    {
        langauageName : "Python",
        langauageFileName : "py"
    }
]

codinglanguage.forEach(item => {
    // console.log(item.langauageName);
});

const laptops = ["MacBook","Lenovo","Dell","HP"]
const values = laptops.forEach(element => {
    // console.log(element);
    return element
});

// console.log(values);

const mynums = [1,2,3,4,5,6,7,8,9,10]
// const nums = mynums.filter((num) => num>4)
const nums = mynums.filter((num) => {
    return num>4
})
// console.log(nums);

const newnums = []
mynums.forEach((num) => {
    if (num > 4) {
        newnums.push(num)
    }
})
// console.log(newnums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "Science"
})
// console.log(userBooks);