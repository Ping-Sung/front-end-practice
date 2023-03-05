let characters =[
    'A','B','C','D','E','F','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','n','o','p','q','r','s','t','u','v','w','x','y','z','*','&','$','#','!','?','<','>','+'
    ]

let pwd1 = ""
let pwd2 = ""

let pwd1El = document.getElementById('pwd1-element')
let pwd2El = document.getElementById('pwd2-element')



function generate() {
    for (let i = 0; i < 12; i++) {
        pwd1 += characters[Math.floor(Math.random() * characters.length)]
        pwd2 += characters[Math.floor(Math.random() * characters.length)]
    }
    
    // console.log(pwd1 + " . " + pwd2)
    pwd1El.textContent = pwd1
    pwd2El.textContent = pwd2

    pwd1 = ""
    pwd2 = ""
}