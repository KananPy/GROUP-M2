// let obj1 = {
//     name: 'Ayxan',
//     age: 19,
//     occupation: 'student'
// }

// let obj2 = {
//     name: 'Suray',
//     age: 28,
//     occupation: 'Developer'
// }

// let obj3 = {
//     name: 'Neman',
//     age: 22,
//     occupation: 'Serbest meslek'
// }


// class Person{
//     constructor(name, age, occupation){
//         this.name = name
//         this.age = age
//         this.occupation = occupation
//     }


//     showPerson(){
//         console.log(`THis person name is ${this.name}, age is ${this.age} and occupation is ${this.occupation}`);
//     }
// }


// const person1 = new Person('Ayxan', 19, 'Student')
// const person2 = new Person('Suray', 25, 'Developer')
// const person3 = new Person('Eldost', 19, 'Hecne')

// person2.showPerson()


class Car{
    constructor(brand){
        this.brand = brand
        
    }


    start(){
        return `${this.ad} is cool`
    }
}

class Model extends Car {
    constructor(brand, model){
        super(brand)
        this.model = model
    }

    car(){
        console.log(`${this.start}. Model is ${this.model}`);
    }
}

const new_car = new Model('VW', 'Passat')
new_car.car()


// const bmw = new Car('bmw', 'm5', 230, false)

// console.log(bmw);
