let show = document.querySelector('.show')
let author = document.querySelector('.author')

let apiUrl = 'https://type.fit/api/quotes'

 function display() {

    fetch(apiUrl)
    .then(eve=>{
        return eve.json();
    })
    .then(eve =>{
        let len = Math.floor(Math.random()*eve.length)
        console.log(len);
        let str = eve[len]?.text
        let auth = eve[len]?.author
        if (auth == null) {
            auth = "unknown"
        }
        show.textContent = `" ${str} "`
        author.textContent = `...${auth}`
    })

}

display();