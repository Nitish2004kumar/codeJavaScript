const name = "nitish"
const rollno =108
// console.log(name + " Rollno is " + rollno);
console.log(`Hello my neme is ${name} and my roll no is ${rollno}`);
// console.log(`Hello my name is ${name} and my roll no is ${rollno}`);
const gamename = new String('nitish')
/*console.log(gamename[0])//n
console.log(gamename.__proto__);//{}
console.log(gamename.length);//6
console.log(gamename.toUpperCase());//NITISH
console.log(gamename.charAt(4));
console.log(gamename.indexOf('s'));*/

const newString = gamename.substring(0,4)//can't use negative value
console.log(newString);

const anotherString = gamename.slice(-6,2)//only in slice we can use negative value
console.log(anotherString);

const newStringone = "  hitesh  "
console.log(newStringone);
console.log(newStringone.trim());// it remove starting space and ending space
//it works only on white space and new line

const url = "https://nitish.com/hitesh%20kumar"
console.log(url.replace('%20','-'));
//https://nitish.com/hitesh-kumar
console.log(url.includes('nitish'));//true
console.log(url.includes('kumar'));//false

console.log(gamename.split('/'));
console.log(gamename.split('-'));

