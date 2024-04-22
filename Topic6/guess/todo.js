let input = document.querySelector('#toDoInput')
let btn = document.querySelector('#addButton')
let ul = document.querySelector('#toDoList')

let arr = []

function add(){
    arr.push(input.value)
    arr.forEach((value, index, array) =>{
        console.log(value);
    })
}



