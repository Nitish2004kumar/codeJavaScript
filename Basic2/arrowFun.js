const user ={
    username: "Nitish",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome`);
       // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);//{} inside broser global  is window object

// function chai(){
//     let username="Nitish"
//     console.log(this.username);
//    // console.log(this.username); //undefined inside the function
// }
// chai()

// //other tarika

// const chai = function  () {
//     let username = 'Nitish'
//     console.log(this.username);
// }
// chai()// undefined

//arrow function

// const chai =   () =>{
//         let username = 'Nitish'
//          console.log(this.username);
//      }
//      chai()//undefined

// const addtwo = (num1,num2) =>{
//     return num1 + num2
// }
// console.log(addtwo(6,7));


//imlplicit return
// const addtwo = (num1,num2) =>  num1 + num2
// const addtwo = (num1,num2) => (num1 + num2)
const addtwo = (num1,num2) => ({username: "Nitish"}) //use parenthesis retun object

console.log(addtwo(6,7));



