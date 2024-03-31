// for of 
const arr = [1,2,3,4,5]
for (const num of arr) {
   // console.log(num);
    
}

const greeting = "hello world!"
for(const greet of greeting){
   // console.log(`each char is ${greet}`);
}

//maps order , unique value , object
const map = new Map()
map.set('IN', 'India')
map.set('Fr', 'france')
map.set('End', 'england')
map.set('USA', 'United State of America')
// console.log(map);

for(const key of map){
    // console.log(key );
}

for(const [key, value] of map){
    // console.log(key , ':-',value);
}

// const myobject = {
//     'game1': 'Nfs',
//     'game2': 'spiderman'
// }
// for(cosnt [key,value] of myobject){//my object is not iterable
//     // console.log(key ,':-', value);
// }

//we can use for in loop 

const myobject ={
    js: 'javascript',
    ts: 'typescript',
    cpp:"c++",
    py:"python"
}
for (const key in myobject) {
    // console.log(`${key} is shortcut for ${myobject[key]}` );
   
}

const programming =["js","rb","py","c++","java"]
for(const key in programming){
   // console.log(programming[key]);//print only key then it gives only index of all 
}

// for each loop
const coding = ['js','py','c++']

// coding.forEach( function  (item) {
//     console.log(item);
// })
coding.forEach(  (item) =>  {
   // console.log(item);
})

// function printme(val){
//     console.log(val);
// }
// coding.forEach(printme)

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// })


const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js"


    },
    {
        languageName: "java",
        languageFileName: "java"


    },
    {
        languageName: "c++",
        languageFileName: "cpp"


    }
]
mycoding.forEach((item) => {
    console.log(item.languageName);
})