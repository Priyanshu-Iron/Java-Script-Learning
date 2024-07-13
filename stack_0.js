//Stack(Primitive), Heap(Non-Primitive)

let user1 = "Priyanshu"

let user2 = user1

user2 = "Prince"

console.log(user1);
console.log(user2);

let userOne = {
    name : "Stark",
    id : "123@xyz"
}

// console.log(userOne)
// console.table(userOne)

let userTwo = userOne

userTwo.name = "Tony"

console.log(userOne);
console.log(userTwo);
