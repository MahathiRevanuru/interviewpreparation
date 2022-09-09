// //question1
// //call
// let employee1={
//     name: "raamu",
//     employeeCode:1,
//     domain:"technical",
//     displayInfo:function(){
//     console.log(this.name,this.employeeCode,this.domain);
// }
// }
// employee1.displayInfo();
// let employee2={
//     name: "somu",
//     employeeCode:2,
//     domain:"develpoer",
// }
// let employee3={
//     name: "arha",
//     employeeCode:3,
//     domain:"HR",
// }
//  employee1.displayInfo.call(employee2);
//  employee1.displayInfo.call(employee3);

//  //apply
//  displayInfo.apply(employee1,["male",24]);//arguments are passed in the form of an array
//  displayInfo.apply(employee2,["male",25]);
//  displayInfo.apply(employee3,["female",21]);

//  //bind
//  let result1 = displayInfo.bind(employee1);
// console.log(result1);
// result1("Male",24);

// // let result1 = function(gender,age) {
// //     console.log(this.name, this.employeeCode, this.domain, gender, age);
// // }
// // result1("Male",24);


// let result2 = displayInfo.bind(employee2);
// // console.log(result1);
// result2("Male",25);

// let result3 = displayInfo.bind(employee3);
// // console.log(result1);
// result3("Female",23);
// displayInfo.bind(employee1)("Male",24);

// //question2

// const Objname={
//     lname:'mahathi',
//     fname:'revanuru'
// }
// //question 3
// function Person (name,salary){
//     this.name="name";
//     this.salary="salary"
// }
// const Person1= new Person('mahathi',2000);
// console.log(Person1.name);

// // question 5
// const studentOne = {
//     name: "mahathi",
//     age:21,
//    StudentDetails: function(){
//         console.log(`name ${this.name}age ${this.age}`);
//         // return(`name ${this.name}age ${this.age}`)
//     }   
// }
// // console.log(student);

// const studentTwo={
//     name:"revanuru",
// }

// studentTwo.__proto__= studentOne;
// console.log(studentTwo.age);
// console.log(studentTwo);
// // console.log(studentTwo.StudentDetails());
// studentTwo.StudentDetails();
// console.log(studentOne.__proto__);
// console.log(studentOne.__proto__.proto__);//null

// console.log(studentTwo.__proto__);
// console.log(studentTwo.__proto__.__proto__);
// console.log(studentTwo.__proto__.__proto__.__proto__);//null

// let myArr=[1,2,3,4,5];
// console.log(myArr.__proto__);
// console.log(myArr.__proto__.__proto__);
// console.log(myArr.__proto__.__proto__.__proto__);

// function hello(parans){
//     console.log("hi");
// }
// console.log(hello.__proto__);
// console.log(hello.__proto__.__proto__);
// console.log(hello.__proto__.__proto__.__proto__)

// //question 6
// const student = {
//     name: "mahathi",
//     age:21,
//    StudentDetails: function(){
//         console.log(`name ${this.name}age ${this.age}`);
//         // return(`name ${this.name}age ${this.age}`)
//     }   
// }
// console.log(student);

// //question 7

// function output(callback){
//     console.log("out");
//     callback();
// }
// function input(){
//     console.log("in");
// }

// //question 8
// function one(){
//     setTimeout(function (){
//         console.log("one");
//     },2000)
// }
// function two(){
//     console.log("two");
// }
// one();
// two();

// //question 9
// function square(q){
 
//     let square;
//     square=q*q;
//     return square;
// }
// square(9)
