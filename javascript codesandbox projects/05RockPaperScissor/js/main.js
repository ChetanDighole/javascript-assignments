let userscore = document.querySelector("#userScoreVal");
let compscore = document.querySelector("#compScoreVal");

let resultUser = document.querySelector("#result-user-stat")
let resultComp = document.querySelector("#result-comp-stat")
let result = document.querySelector("#result-final-stat")

let userdid = document.querySelector(".userdid")
let compdid = document.querySelector(".compdid")


let rock = document.querySelector("#r");
let paper = document.querySelector("#p");
let scissor = document.querySelector("#s");

let user = 0;
let comp = 0;

let arrChoice = document.querySelectorAll(".choice");
// [r,p,s]
let newArr = []

arrChoice.forEach((x)=>{
    newArr.push(x.id)
})

function check(myChoice,compChoice){

    if(myChoice==compChoice){
        compdid.innerText="tie"
        userdid.innerText="tie"
        // console.log("tie")
        return
    }
    if(myChoice=='r'){
        userdid.innerText="rock";
        if(compChoice=='p'){
            comp++;
            compdid.innerText="paper"
            resultComp.innerText="Computer: "+comp
            // console.log("p");
        }
        else{
            user++;
            compdid.innerText="scissor"
            resultUser.innerText="User: "+user
            // console.log("s");
        }
    }
    if(myChoice=='p'){
        userdid.innerText="paper";
        if(compChoice=='s'){
            comp++;
            compdid.innerText="scissor"
            resultComp.innerText="Computer: "+comp
            // console.log("s");
        }
        else{
            user++;
            compdid.innerText="rock"
            resultUser.innerText="User: "+user
            // console.log("r");
        }
    }
    if(myChoice=='s'){
        userdid.innerText="scissor";
        if(compChoice=='r'){
            comp++;
            compdid.innerText="rock"
            resultComp.innerText="Computer: "+comp
            // console.log("r");
        }
        else{
            user++;
            compdid.innerText="paper"
            resultUser.innerText="User: "+user
            // console.log("p");
        }
    }


}

function run(x){
    let compChoice = newArr[Math.floor(Math.random()*newArr.length)];
    let myChoice = x.id;
    check(myChoice,compChoice)
    if(user<comp){
        result.innerText="Winner: Computer" 
    }
    else if(comp<user){
        result.innerText="Winner: User"
    }
    else{
        result.innerText="Winner: Tie"
    }
    
    

}