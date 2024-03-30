//code execute in js
//Javascript Excution context 
//javascript is single thread 
//1.global excution context => this 
//2. function excution context
//3.eval excution context

//two phage
//1.memory creation phase => only memory is allocated
//2.excution phase exrcuted the code

let val1 =10
let val2 = 5
function addnum(num1, num2){
    let total = num1+num2
    return total
}
let result1 = addnum(val1,val2)
let result2 = addnum(10,2)
console.log(result1);
console.log(result2);

//discription about this code
//1.global execution
//2.memory phase
//val1 and var2 undefined 
//addnum defination
//result1 and result2 undefined

//3.execution phase
//new variable environment and execution thread

//call stack
//last in first out 