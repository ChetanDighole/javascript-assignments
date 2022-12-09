let text = document.querySelector(".textField")
let btn = document.querySelector(".btn")
let output = document.querySelector(".output")

btn.addEventListener('click' , count)

function count() {
    let inputString = text.value;
    
    output.textContent = "There are " + inputString.length + " characters in your text"

}