// let a = [4,67,8,4,23,6,8]


// // for(let i =0; i<a.length; i++){
// //     console.log(a[i]);
// //     i
// // }


// // function add(){
// //     return 5+4
// // }

// // console.log(add());

// a.forEach(function(index, arr, array){
//     // console.log(array[arr]);
    
// })

// let map_arr = a.map(function(value){
//     return value + 10
// })

// let fArr = a.filter((value) => value <10)

// a.sort((a,b) => {if (a>b) {
//     return -1
// } else {
//     return 1
// }})
// // console.log(a);

// console.log(fArr);


// console.log(Math.floor((Math.random() * 10 +1)));

let input = document.querySelector('.guess')
let choose = document.querySelector('.choose')
let result = document.querySelector('.result')

let random = Math.floor(Math.random() *100 + 1)
    console.log(random);


choose.addEventListener('click', function(){

    let newInput = input.value
    
    if(random == newInput){
        result.innerText = "Tebrik edirem tapmisan"
    } else if (random > newInput){
        result.innerText = "Reqem cok kicikdir"
    } else if (random < newInput){
        result.innerText = "Reqem cok boyukdur"

    }
    input.value = ""
})


let arr = []


