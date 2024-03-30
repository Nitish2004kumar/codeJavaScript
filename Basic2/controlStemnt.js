//if

// const isUserloggedIn = true
// // if(isUserloggedIn){
//    // if(2=="2"){//did`t check data type
//     if(2==="2"){//it checks data type also so false
//     console.log("executed");

// }else{
//     console.log("not executed");
// }

//=== strictly equal, !==, ==

// const temperature =41
// if(temperature === 41){//two equal or three equal are usually same but three equal check data type
//     console.log("less than 50");

// }else{
//     console.log("greater than 50");
// }

// const score =500
// if(score > 100){
//     const power ='fly'
//     console.log(`User power : ${power}`);
// }


// const balance =1000
// if(balance >500) console.log("test"),
// console.log("test2");
//it is working but don`t use

// if(balance < 500){
//     console.log("less than 500");
    
// }else if(balance < 780){
//     console.log("less than 780");

// }else if(balance < 900){
//     console.log('less than 900');
// }
// else{
//     console.log("less than 1200");
// }

const isUserloggedIn = true
const debitcard = true
const LoggedInfromGoogle = false
const LoggedInFromGmail = true
if(isUserloggedIn && debitcard && 2==5){//all are true
    console.log("allow to buy course");
}

if(LoggedInFromGmail || LoggedInFromGmail || false){// any one is true
    console.log("Allow to visit the course");
}

