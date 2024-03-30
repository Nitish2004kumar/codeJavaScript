//falsy value

//false , 0,-0,BigInt 0n,"",null,NaN,undefined

//truthy value

//"0", "false", " ",[empty array ],{empty object}, function(){} empty function

const userEmail = []//true
if(userEmail){
    console.log("got user email");
} else{
    console.log("don`t have user email");
}

if(userEmail.length === 0){
    console.log("Array is empty");
}

// const userEmail = "nitish@sci.ai" //its shows true but empity string it shows false
// if(userEmail){
//     console.log("got user email");
// } else{
//     console.log("don`t have user email");
// }

const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty ");
}
// false ==0 is shows true
//false ==''   true
//0==''   true

//Nullish coalescing operator (??): null undefined
let val1;
// val1 = 5 ?? 10 //5
// val1 = null ?? 10 //10
// val1 = undefined ?? 15 //15
val1 = null ?? 10 ?? 20 //10



console.log(val1);

//terniary operator
//const ? true : false

const iceTeaprice = 100
iceTeaprice >= 80 ?  console.log("greater than 80") : console.log("less than 80"); 
