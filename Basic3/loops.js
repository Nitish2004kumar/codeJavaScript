// for
// for (let i = 0; i < 10; i++) {
//     // const element = i;
//     // console.log(element);
//     if(i==5){
//         console.log("5 is best number");
//     }
//     console.log(i);
    
// }

// for(let i =1; i<=10; i++){
//     console.log(`Table of  ${i}`);
//     for(let j =1;j<=20;j++){
//        // console.log(`inner loop ${i} and inner loop ${j}`);
//        console.log(i + '*' + j  + ' = ' + i*j);
//     }
// }

let myarry = ['flash ', 'batman', 'superman']
// console.log(myarry.length);

for(let i = 0; i<myarry.length;i++){
    const element = myarry[i];
    // console.log(element);

}

// break and continue
// for(let i = 1;i <= 20; i++){
    
//     if(i==5){
//         console.log("5 dectected");
//         break;
//     }
//     console.log(`value of i is ${i}`);

// }
// for(let i = 1;i <= 20; i++){
    
//     if(i==5){
//         console.log("5 dectected");
//         continue;
//     }
//     console.log(`value of i is ${i}`);

// }

//while loop and do while loop


let index =0
while (index <= 10 ) {
    // console.log(`vlaue of index is ${index}`);
    index = index + 2
    
}

let myarray  = [ 'flash ','batman ', 'superman']

let arr =0;
while(arr < myarray.length){
    // console.log(`value is ${myarray[arr]}`);
    arr = arr +1
}
// do while

let score = 11
do {
    console.log(`score is ${score}`);//if the condition is false then one time  execute
    score ++;
}
while (score <= 10) {
    
}
