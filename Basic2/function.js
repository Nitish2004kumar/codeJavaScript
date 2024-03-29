function saymyname(){
    console.log("N")
    console.log("i")
    console.log("t")
    console.log("i")
    console.log("s")
    console.log("h")
}
// saymyname()

// function addTwoNum(num1,num2){//parameter
//     console.log(num1+num2);
// }
// addTwoNum(3,4)

function addTwoNum(num1,num2){
   // let result = num1+num2
    return  num1+num2;
    console.log("Nitish");//after return unreachable code it cant` print Nitish
}
const result = addTwoNum(5,6)
// console.log("Result: ",result);

// function loginUserMessage(username){
function loginUserMessage(username= "Nit"){//Nit just logged in defalut if you passed then overwrite

    // if(username===undefined){
        if(!username){
        console.log("please enter a username");
        // return


    }
    return `${username} just logged in `

}
// console.log(loginUserMessage());//undefined
// console.log(loginUserMessage("Nitish"));
//undefined ,(" ")=>always false 


// .......... function .......... part2

// function CalculateCartPrice(...num1){//make array and print all value rest operator
// function CalculateCartPrice(num1){//print only first 200
function CalculateCartPrice(var1,var2,...num1){
    //except var1  and var2 rest all values are printed

    return num1
}
console.log(CalculateCartPrice(200,300,400,500));

const user ={
    username:"Nitish",
    price: 400
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
//object passed
handleObject({
    username: "dhoni",
    price: 10000000000
})
//array passed
const myNewArray = [200,400,500,600]
function returnSecondvalue(getArray){
    return getArray[1]
}
// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200,400,500]));
