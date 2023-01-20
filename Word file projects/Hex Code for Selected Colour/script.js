let hero = document.querySelector('.hero')
let box = document.querySelector('.box')
let result = document.querySelector('.result')

run()

//generating random color
function random() {
    let alphaNum = "0123456789ABCDEF"
    let code="";
    for(let i =0 ;i<6;i++){
        let randEle = alphaNum[Math.floor(Math.random()*alphaNum.length)]
        code = code+randEle;
    }
    return `#${code}`;
}


//main function
function run() {

    for (let i = 0; i < 20; i++) {
        let color = random()
        let temp = document.createElement('div')
        temp.classList.add('box')
        temp.style.backgroundColor=color
        hero.append(temp)

        temp.addEventListener('click',()=>{
            console.log(color);
            //copied to clipboard
            navigator.clipboard.writeText(color)
            result.innerText = color + " is copied to your clipboard"
        })


    }
}

