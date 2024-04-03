
const result = document.getElementById('result');
const numbers = document.querySelectorAll('.nums');
const operators = document.querySelectorAll('.ops button');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.delete');


function updateDisplay(value) {
    result.value += value;
    console.log(value);
}


function NumberClick(event) {
    updateDisplay(event.target.value);
    console.log('salam', event.target);
}



for(let i of numbers){
    i.addEventListener('click', NumberClick)
}




