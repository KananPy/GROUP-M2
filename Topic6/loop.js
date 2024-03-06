var text = 'I love coding as I love you'

// var num = 43632

var arr = text.split(' ')

console.log(arr);

var arr2 = []

// var numbers = num.toString()
for(var i = 0; i < arr.length; i++){
    if (arr[i].includes('o')) {
        arr2.push(arr[i])
    } 

    console.log(arr[i]);
    
}

console.log(arr2);