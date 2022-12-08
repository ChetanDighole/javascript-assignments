let time = document.querySelector('.time')
let start = document.querySelector('.start')
let stop = document.querySelector('.stop')
let reset = document.querySelector('.reset')


let milliSec = 0;
let sec = 0;
let min = 0;

start.addEventListener('click',startTimer)

let flag = false;
let myInterval;

function startTimer() {
    if (!flag) {
        myInterval= setInterval(()=>{
            milliSec++
            if(milliSec==100){
                sec++;
                milliSec=0
            }
            if(sec==60){
                min++
                sec=0
            }
            time.textContent=`${min}:${sec}:${milliSec}`
        },10)
        flag = true
    }
}    


stop.addEventListener('click',()=>{
    clearInterval(myInterval)
    // time.textContent=`${min}:${sec}:${milliSec}`
    flag=false
})


reset.addEventListener('click',()=>{
    clearInterval(myInterval)
    flag=false;
    min='00';
    sec='00';
    milliSec='00';
    time.textContent=`${min}:${sec}:${milliSec}`
})