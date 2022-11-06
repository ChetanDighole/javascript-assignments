const btn = document.querySelector(".btn")
const joke = document.querySelector(".joke")

btn.addEventListener('click',change)
function change() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(Response => Response.json())
        .then(x =>{
            joke.innerText = x.value;
        })
        
}