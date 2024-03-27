"use strict";


let a = 5

let b = 6

console.log('adi add', a+b);

let c = 78

let d = 45

// console.log(c+d);

let u = 4

let o = 6

// console.log(u+o);

function add(num1, num2, ehmed, memmed, kenan){
    console.log('func add',num1+num2);
}

add(a,b)
add(c, d)
add(u,o)

// var
// let
// const
// const a = [1,4,6]
// a.push(435)
// a.pop()

// if(true){

//     console.log(a);

// }

// console.log(a);
// let arr1 = [2,5,78,8,54,3]

// for (let i of arr1) {
//     console.log(i);

// }

// function add(a){
//     for(let i of a){
//         console.log(i);
//     }
// }

// let arr1 = [2,5,78,8,54,3]
// let arr2 = [2,5,8,3243,34,4756]
// let arr3 = [8,0,9,76,'sasdas',54]

// add(arr1)
// add(arr2)

// let num1 = 4
// let num2 = 9

// function sum(a,b){

//     let add = a + b

//      return add
// }

// console.log(sum(5,7));

// let a = -745

// console.log(a.toString().length-1);
// let a = 30;

// for (let i = 2; i <=a ; i++) {
//     console.log((i % 2 ===0) ? i : 0);

// }

// let arr = ['a','b',7,9]
// function determineNum(symbol) {
//     for(let i = 0; i<= symbol.length; i++){
//         if(typeof symbol[i] === 'string'){
//             return "String"
//         }else if(typeof symbol[i] === 'number'){
//             return"Number"
//         }
//     }
// }
// console.log(determineNum(arr));

// for (let i = 2; i <= a; i++) {
//     let a = true;

//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             a = false;
//             break;
//         }
//     }

//     if (a) {
//         console.log(i);
//     }
// }

// function validateHello(greetings) {

//     for ( let str in greetings){
//      let res = str.toLowerCase();
//       if (res == "hello") {
//       return true;
//     } else if (res == "ciao") {
//       return true;
//     } else if (res =="salut") {
//       return true
//     } else if (res == "hallo") {
//       return true;
//     } else if (res == "hola") {
//       return true;
//     } else if (res == "ahoj") {
//       return true;
//     } else if (res == "czesc") {
//       return true ;
//       }
//       }
// }

// function validateHello(greetings) {
//     let messages = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
//     let lowercaseGreetings = greetings.toLowerCase().split(' ');
//     for (let i = 0; i < lowercaseGreetings.length; i++) {
//         let word = lowercaseGreetings[i];
//         for (let j = 0; j < messages.length; j++) {
//             let message = messages[j];
//             let match = true;
//             for (let k = 0; k < message.length; k++) {
//                 if (word[k] !== message[k]) {
//                     match = false;
//                     break;
//                 }
//             }
//             if (match) {
//                 return true;
//         }
//     }
//     return false;
// }

// validateHello('doIng, Doing qUe tres ahOj are: HAsTA! BiEn QUe yOu; HOmbRE viSta, YoU;')

// function prime(n){
//     if(n % 2 === 0 && n% 3===0){
//         return false
//     }
//     for (let i = 1; i < n; i++) {
//         if(n % i !==0 && i%2!==0 && i%3!==0)
//         console.log(i);
//     }

// }

// prime(20)

// function solve(arr) {
//   let new_arr = [];
//   let arrlength = arr.length
//   for (let i = 0; i < arrlength; i++) {
//     if (i % 2 === 0) {
//       let max = Math.max(...arr);
//       arr.splice(arr.indexOf(max), 1);
//       new_arr.push(max);
//     } else {
//       let min = Math.min(...arr);
//       arr.splice(arr.indexOf(min), 1);
//       new_arr.push(min);
//     }
//   }
//   return new_arr
// }

// console.log(solve([15,11,10,7,12]));

// const months = [5, 657, 3, 15,11,10,7,12];

// let result = months.filter((num) =>  num % 2 !=0)

// let ardicil = result.sort((a,b) => b-a)
// console.log(months.sort((arr,arr2) => arr-arr2));

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 6);

// console.log(ardicil);

// let a = '5'

// if(isNaN('salam')){
//   console.log(true);
// }else{
//   console.log(false);
// }

// if (isFinite(1000 / a)) {
//   console.log('Number is NOT Infinity.')
// }



// let b = 6

// function add(num1,num2){

//   return num1+num2

// }

// add([324,234,434],[324,656,8])

// console.log(add([324,234,434],[324,656,8]));

