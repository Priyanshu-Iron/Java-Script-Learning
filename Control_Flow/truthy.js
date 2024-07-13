const useremail = []

if(useremail){
    console.log("We have User Email");
}else{
    console.log("We dont have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

const emptyobj = {
    useremail : "ps2894944@gmail.com"
}
if(Object.keys(emptyobj).length===0){
    console.log("Object is Empty");
}else {
    console.log("We have somthing in object");
}