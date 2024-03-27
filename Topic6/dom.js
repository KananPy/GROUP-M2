let text = document.querySelector("#text");
let ul = document.querySelector(".new_line");
let main = document.querySelector(".main");

let arr = ["Ilqar", "Elnare", "Eldost", "Nuru", "Aygun"];

for (let i = 0; i < arr.length; i++) {
  ul.innerHTML += `<li style='padding: 25px;'>${arr[i]}</li>`;
}

ul.style.display = "flex";
ul.style.backgroundColor = "red";

// text.innerText = 'testing'

// let h6 = document.createElement("h6");

// let text2 = document.createTextNode("Salam yeni tag");

// h6.appendChild(text2)

// text.appendChild(h6);

// let a = confirm("true or false");

// if (a == true) {
//   text.innerHTML = `<div>
//                         <input type='text'>
//                     </div>`;
// }

// let ul = document.createElement('ul')

// let li = document.createElement('li')

// let nav = document.createElement('nav')

// let txt = document.createTextNode('Salam')

// li.appendChild(txt)

// ul.appendChild(li)

// nav.appendChild(ul)
