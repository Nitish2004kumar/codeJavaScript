//DATES 
let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toTimeString());
// console.log(mydate.toLocaleString());
// console.log(mydate.getTimezoneOffset());
// console.log(mydate.toJSON());
// console.log(typeof mydate);//object

//let mycreatedDate = new Date(2024,2,6,1,55)
// console.log(mycreatedDate.toLocaleString());
//in java script array index  month is started in 0 is jan 

let mycreatedDate = new Date("03-06-2024")
// console.log(mycreatedDate.toLocaleString());

//Time

let mytimestamp = Date.now()
// console.log(mytimestamp)
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

//`${newDate.getDay()} and time is `

newDate.toLocaleString('default',{weekday:"long"})

