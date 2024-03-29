

//object literals
const mysym = Symbol('key1')

const jsuser ={
    name: "nitish",
    "full name": "Nitish kumar",
    [mysym]:'mykey1',
    age: 18,
    location:"chennai",
    email: "nitish@gmail.com",
    isLogggedIn: false,
    lastLoginDays:['monday','saturday']


}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(mysym);
// console.log(jsuser["full name"]);
// // console.log(typeof mysym);//symbol
// jsuser.email = "nit@gmail.com"
// Object.freeze(jsuser)
jsuser.email="nitishmicro@gmail.com"//after freeze we can`t change 
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello js");
}
jsuser.greetingtwo = function(){
    console.log(`hello js user,${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());