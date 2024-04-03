// let input =document.querySelector('#toDoInput')
// let button = document.querySelector('#addButton')
// let list = document.querySelector('#toDoList')


// button.addEventListener('click', function(){
//     list.innerHTML += `<li>${input.value}</li>`
//     console.log(typeof input.value);
// })


// let arr = []
// input.addEventListener('keypress', function (event) {
//     if (event.key === "Enter") {
//         event.preventDefault();
//         let a = input.value
//         list.innerHTML = ''
//         arr.push(a)
//         for (let  i= 0;  i< arr.length; i++) {
//             list.innerHTML += `<li class ="lii" >${arr[i]}<button class = "delete">Delete</button></li>`
//         }
    
//     }
//     console.log(arr);

// })


// function add(){
//     console.log("Testing callback");
//     name()
// }

// add()


// function name() {
//     console.log("Second function");
// }


let a = 10

let b = 20

let sum = 0


function add(num1, num2){
    console.log(num1+num2);
    mult(a,b)
}

function mult(x, y){
    console.log(a*b);
}

add(a,b)

