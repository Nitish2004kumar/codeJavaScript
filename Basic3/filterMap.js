// const codding = [ 'js','ruby','java','python','cpp']
// const values = coding.forEach((item)=> {
//     console.log(item);
//     return item
// })
// console.log(values); //it shows error coding is not defined 

const mynum = [1,2,3,4,5,6,7,8,9,10]
// const newnum = mynum.filter((num)=>num >4)
// const newnum = mynum.filter((num)=> {
//    return num >4})
// console.log(newnum);

// const newnum = []
// mynum.forEach( (num) =>{
//     if(num >4){
//         newnum.push(num)
//     }
// })
// console.log(newnum);

const books = [
    {title: 'Book one ',genre: 'fiction',publish: 1981,edition:2004},
    {title: 'Book two ',genre: 'non fiction',publish: 1982,edition:2003},
    {title: 'Book one ',genre: 'history',publish: 2000,edition:2002},
    {title: 'Book one ',genre: 'non fiction',publish: 1981,edition:2001},
    {title: 'Book one ',genre: 'fiction',publish: 2004,edition:2000},
    {title: 'Book one ',genre: 'history',publish: 2005,edition:1999}
]
let userBooks = books.filter((bk) => bk.genre ==='history')
// console.log(userBooks);

userBooks = books.filter ( (bk) => {
    return bk.publish >= 2000 && bk.genre==='history' && bk.edition >=2000

})
// console.log(userBooks);

const mynumber = [1,2,3,4,5,6,7,8,9,10]
// const newnums = mynumber.map( (num) => {
//     return num +10})
// console.log(newnums);

const newnum = mynumber
          .map( (num) =>num *10 )
          .map( (num) =>num +1 )
          .filter( (num) => num >= 40)
//   console.log(newnum)


//reduce 
const num = [1,2,3]
// const mytotal = num.reduce(function (acc,curval){
//     console.log(` acc ${acc} and curval: ${curval}`);
//     return acc + curval
// },0//initial value
// )
// console.log(mytotal);

//using for each loop 
const mytotal = num.reduce((acc,curval)=> acc + curval,0)
// console.log(mytotal);

const shoppingcart = [

    {
        itemName: 'js course',
        price: 5999

    },
    {
        itemName: 'py course',
        price: 2999

    },
    {
        itemName: 'ts course',
        price: 1999

    },


]
const priceToPay =shoppingcart.reduce( (acc,item)=>acc + item.price,0)
console.log(priceToPay);
 