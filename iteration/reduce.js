// Reduce Function

const arr = [1,2,3,4,5]

// const reducefunction = arr.reduce(function (accumulator, currentvalue) {
//     console.log(`Accumulator : ${accumulator} and Current Value : ${currentvalue}`);
//     return accumulator + currentvalue} ,0)

const reducefunction = arr.reduce((accumulator,currentvalue) => accumulator+currentvalue, 0)

console.log(reducefunction);

const shoppingCart = [
    {
        itemName : "Blue Jeans",
        price : 1299
    },
    {
        itemName : "Black Jeans",
        price : 1466
    },
    {
        itemName : "Blue Shirt",
        price : 1299
    },
    {
        itemName : "White Shirt",
        price : 1299
    }
]

const totalprice = shoppingCart.reduce((accumulator,item) => accumulator + item.price, 0)
console.log(totalprice);