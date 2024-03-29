const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstrctor: "nitish"
}
//course.consInstructor
const {courseInstrctor: inst} =course//destructure if the name is big we can replace
console.log(inst); //object destructure

// // destructure is used in react like this
// const navbar = ({company}) => {}
// navbar(company ="microsoft")

//concept of api
//  api is in the form of array , objects
//  [
//     {},
//     {},
//     {},

//  ]