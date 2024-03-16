const tinderUser ={}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        Userfullname:{
            firstname:"Nitish",
            lastname:"kumar"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.Userfullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5:"e",6:"f"}
// const obj3 ={obj1,obj2}
// console.log(obj3);

// const obj5 =Object.assign({},obj1,obj2)
// const obj5 ={...obj1, ...obj2}
// 
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//array inside array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//check the property is available or not
