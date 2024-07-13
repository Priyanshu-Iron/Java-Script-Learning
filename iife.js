// Immediately Invoked Function Expressions (IIFE)

// function mac(){
//     console.log("Macbook Buyed");
// }

(function mac(){
    console.log("Macbook Buyed");
})();

((name)=>{
    console.log(`Macbook User is ${name}`);
})("Priyanshu Singh");