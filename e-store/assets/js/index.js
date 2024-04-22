
const add_btn = document.querySelectorAll('.add')
const del_btn = document.querySelectorAll('.del')
const sum_price = document.querySelector('.price')

let obj = {}
let sum = 0
let say = 1


add_btn.forEach((b) => {
    b.addEventListener('click', () => {
        console.log('add click');
        sum++
        const card_body = b.closest('.card-body')
        const name = card_body.querySelector('.card-title').textContent
        
        if(!obj[name]){
            obj[name] = {
                quantity: say,
                price: +b.value
            }
        }
        say++

       totalPrice(obj[name].quantity, obj[name].price)
        console.log(obj);
        
        sum_price.innerText = sum
    })
})


del_btn.forEach((b) => {
    b.addEventListener('click', () => {
        console.log('del click');
        sum--
        sum = sum < 0 ? 0 : sum
        
        sum_price.innerText = sum
    })
})

function totalPrice(a,b){
     console.log(a*b);
}






