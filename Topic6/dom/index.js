let add = document.querySelector('.add')
let remove = document.querySelector('.remove')
let sebet = document.querySelector('.sebet')
let shekil = document.querySelector('.img')
let card_text = document.querySelector('.card-title')
let soz = document.querySelector('.input')
let btn = document.querySelector('.submit')
let input1 = document.querySelector('.form-control')
let input2 = document.querySelector('.erazi')

let arr = []


btn.addEventListener('click', function (){
    arr.push(input1.value)
    arr.push(input2.value)
    console.log(arr);
})






card_text.addEventListener('mouseover', function (){
    card_text.style.color = 'red'
})

let sum = 0

// function add1(){
    // sum++
    // count.innerText = sum
    // console.log(sum);
// }

add.addEventListener('click', function (){
    sum=sum + 1
    sebet.innerText = sum
    // shekil.hidden = true
    console.log(sum);
})

remove.addEventListener('click', function (){
    if(sum > 0){
        sum--
        // shekil.hidden = false
        sebet.innerText = sum
    }
    
}
)


