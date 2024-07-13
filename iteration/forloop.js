//For Loop

for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer Loop Value : ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner Loop Value ${j} and Inner Loop ${i}`);
        // console.log(i + '*' + j + '=' + i*j);
    }    
}

myarray = ["Batman","Superman","Aquaman"]
// console.log(myarray.length);
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
}

for (let num = 1; num <= 10; num++) {
    if (num == 5) {
        console.log("5 is Detected");
        break
    }
    const element = num;
    // console.log(element);
}

for (let num = 1; num <= 10; num++) {
    if (num == 5) {
        console.log("5 is Detected");
        continue
    }
    const element = num;
    console.log(element);
}