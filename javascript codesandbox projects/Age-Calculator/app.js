const container = document.querySelector(".container");
const error = document.querySelector(".error");
const dob = document.querySelector("#dob");
const desc = document.querySelector(".desc");
const yr = document.querySelector("#years");
const mnth = document.querySelector("#months");
const dy = document.querySelector("#days");

function getAge(){
    let userValue = dob.value;
    let userDate = new Date(userValue); //converting value into date
    let today = new Date();
    calcAge(today,userDate)
    
}

function calcAge(today,userDate){ 
    let userAge = today.getFullYear()-userDate.getFullYear();
    let userMonth = today.getMonth()-userDate.getMonth();
    let userDay = today.getDay()-userDate.getDay();
    displayAge(userAge,userMonth,userDay)
}

function displayAge(userAge,userMonth,userDay){
    
    yr.innerText = userAge;
    mnth.innerText = userMonth;
    dy.innerText = userDay;

}

