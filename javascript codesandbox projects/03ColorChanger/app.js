let btn = document.querySelector("#button");
let canvas = document.querySelector("#canvas");

btn.addEventListener("click",change)

function change(){
    let alphaNum = "0123456789ABCDEF"
    let code="";
    for(let i =0 ;i<6;i++){
        let randEle = alphaNum[Math.floor(Math.random()*alphaNum.length)]
        code = code+randEle;
    }
    let hexCode = `#${code}`;
    canvas.style.backgroundColor=hexCode
    canvas.innerText=hexCode
}
