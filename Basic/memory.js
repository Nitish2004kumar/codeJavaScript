//heap memory and stack memory
//stack (premitive) number,boolean 
//,heap(non premitive) reference
let myname = "netish"

let anothername = myname
anothername="Nitish"
console.log(myname);
console.log(anothername);

//Heap memory
let userone = {
    email: "userone@gmail.com",
    upi:"user@ybl"
}

let usertwo =  userone 
usertwo.email="nitishlumar@gamil.com"
console.log(userone.email);
console.log(usertwo.email);
