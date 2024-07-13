const mynums = [1,2,3,4,5,6,7,8,9,10]

// const addnums = newnums.map((num)=>{return num+10})
// console.log(addnums);

const value = mynums.forEach(num => {
    console.log(num+10);
    return num
});

// console.log(value);

//Chainning
const newnums = mynums
                .map((num) => num*10)
                .map((num) => num+1)
                .filter((num) => num>=40)

console.log(newnums);