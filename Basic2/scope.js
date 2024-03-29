var c =300
let a=40
const b=50
if(true){
    let a =10
    const b =90
    var c =30//we can`t use var because only print inner value of c
    // console.log("inner a :",a);//but const and let is different
}
// console.log(b);
// console.log(a);

// console.log(c);
//curly bracket is known as scope

//dom means document object model

//>>>>>>>>>>>>>>>>> part2<<<<<<<<<<<<<<<<<<<

function one(){
    const username = "Nitish"

    function two(){
        const website = "youtube"
      //  console.log(username);//child function can use parent function
    }
    // console.log(website);
    two()

}
one()

if(true){
    const username = "hitesh"
    if(username===" hitesh"){
        const website = "youtube"
       // console.log(username +website);
    }
}
// console.log(username); error

//++++++++++++++++++++ interesting +++++++++++++++++

// console.log(addone(6))
function addone(num){
    return num +1

}
// console.log(addtwo(8))//can`t access before initialization
const addtwo = function(num){
    return num+2
}

