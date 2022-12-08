let input = document.querySelector(".inpt")
let output = document.querySelector(".outpt")
let btn = document.querySelector(".btn")

btn.addEventListener('click',check)



function check() {
    //extracting data from front-end
    let str = input.value;

    //converting data to string
    let str1 = str.toString(); //"chc"

    //converting string to array
    let strToArr = Array.from(str1);//["c","h","c"]

    //making a duplicate array from str1
    let arr = Array.from(str1);

    //reversing the duplicate array
    let rev = arr.reverse()

    if(JSON.stringify(rev) == JSON.stringify(strToArr)){
        output.textContent = `${str} - is palindrome`
    }
    else{
        output.textContent = `${str} - not is palindrome`
    }
    

}
