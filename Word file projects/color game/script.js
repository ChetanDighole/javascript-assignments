let res = document.querySelector('.result');
let choose = document.querySelector('.choose')

let arr = ["Red" , "Blue" , "Green"]

function show(event) {
    //computer choose
    let rand = arr[Math.floor(Math.random()*arr.length)];
    
    //displaying computer choose
    res.style.backgroundColor = rand;

    let user = event.target.innerText;
    
    //conditions to display result
    if(user === rand){
        choose.innerHTML = "Correct"
    }
    else{
        choose.innerText = "Wrong"
    }
}