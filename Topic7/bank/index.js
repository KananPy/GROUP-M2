// let obj1 = {
//     name: 'Cage',
//     age: 24
// }

// let obj3 = {
//     name: 'Jane',
//     age: 21
// }

// let obj2 = [...obj1, obj3]

// obj2.age = 30

// obj2.obj3.age = 40


// console.log('obj3', obj3);

// console.log("obj1", obj1);

// console.log("obj2", obj2);


const incrementBtn = document.querySelector('#incrementBtn')
const decrementBtn = document.querySelector('#decrementBtn')
const showBtn = document.querySelector('#showBtn')
const balanceEl = document.querySelector('#balanceEl')
const listTable = document.querySelector('#list')
const moneyInput = document.querySelector('#moneyInput')



class BankAccount {
    balance = 0
    limit = 0
    hesabat = []
    date = new Date()
    constructor(verBalance = 0, verLimit = 0){
        this.balance = verBalance
        this.limit = verLimit
    }
    artir(m){
        if(this.balance >= this.limit || m <= 0){
            return
        }
        console.log('input value', m);
        this.balance += m
        const history = {
            type: 'Cash',
            amount: m,
            created: this.date
        }

        console.log('arr', history);

        console.log('balans', this.balance);

        this.hesabat.push(history)

        return this.balance

    }

    xercle(m){
        const checkValid = () => {
            if(this.balance <=0){
                return
            }

            this.balance -= m

            const history = {
                type: "withdraw",
                amount: m,
                created: this.date
            }

            console.log(history);

            console.log('balans cixma', this.balance);

            this.hesabat.push(history)
        }

        checkValid()

        return this.balance

    } 

    show(){
        const thisObj = this
        console.log(thisObj);

        return this.balance
    }

    
    
    

}


const bankAccount = new BankAccount(100, 2000)


incrementBtn.addEventListener('click', function(){
    const value = moneyInput.value
    bankAccount.artir(+value)

    moneyInput.value = ''
    // console.log(value);
})

decrementBtn.addEventListener('click', function(){
    const value = moneyInput.value

    bankAccount.xercle(+value)
    moneyInput.value = ''

})

showBtn.addEventListener('click', function(){
    const result = bankAccount.show()

    console.log(result);

    balanceEl.innerHTML = result



})