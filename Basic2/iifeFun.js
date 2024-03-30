//Immediately Invoked function Expression(IIFE)
// eliminate the pollution of global function 
(function chai(){
    //named iife
    console.log("DB connected")

})();//exequation call
//in this case you have to use ; after comlpletion  then other iife function work

//use in arrow function 
(() => {
    console.log(`Db connected`);
})();


((name) => {
    console.log(`Db connected ${name}`);
})('Nitish kumar')

