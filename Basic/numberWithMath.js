const score = 400
console.log(score)
const balance = new Number(100)
console.log(balance)

const othernum = 123.899

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// console.log(othernum.toPrecision(4));



const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));//indian rupees seperate accounding to indian counting

/*
Numbers are returns as 
infinite Nan
null => 0
true => 1
false =>0

255; // two-hundred and fifty-five
255.0; // same number
255 === 255.0; // true
255 === 0xff; // true (hexadecimal notation)
255 === 0b11111111; // true (binary notation)
255 === 0.255e3; // true (decimal exponential notation)



*/
//===========================maths================
console.log(Math)

// console.log(Math.abs(-4));//absulute value only Negative value converts into positive

// console.log(Math.round(4.3));

// console.log(Math.ceil(4.2));//gives only top value 5
// console.log(Math.floor(4.2));//integer value

// console.log(Math.min(4,6,7,9,0));
// console.log(Math.max(4,6,7,9,0));

console.log(Math.random());
console.log((Math.random()*10)+1);

console.log(Math.floor(Math.random()*10)+1);

const min =10
const max =20
console.log(Math.floor(Math.random() *(max-min +1))+min)
