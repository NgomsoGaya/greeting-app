var myButton = document.querySelector(".button")
var greetingDisplayHTML = document.querySelector(".space")
var inputName = document.querySelector(".input")
var totalGreetingsHTML = document.querySelector(".total")
var resetButton = document.querySelector(".eraseBtn")

var checkedRadiobtn = document.querySelector('.btns')

let totalGreetings = 0
let greetingDisplay = []

function greet(){
    let userName = inputName.value.trim()

    var radioBtn = document.getElementsByName("language")

for (var i = 0; i < radioBtn.length; i++){

if(radioBtn[i].checked && radioBtn[i].value == 'isiXhosa'){
    if( userName !== null || 0){
        totalGreetings ++
        greetingDisplay.push( "Molo " + userName )
    }
    totalGreetingsHTML.innerHTML = totalGreetings
    greetingDisplayHTML.innerHTML = greetingDisplay
}

else if(radioBtn[i].checked && radioBtn[i].value == 'English'){
    if( userName !== null || 0){
        totalGreetings ++
        greetingDisplay.push( "Hello " + userName )
    }
    totalGreetingsHTML.innerHTML = totalGreetings
    greetingDisplayHTML.innerHTML = greetingDisplay
}

else if(radioBtn[i].checked && radioBtn[i].value == 'Afrikaans'){
    if( userName !== null || 0){
        totalGreetings ++
        greetingDisplay.push( "Hallo " + userName )
    }
    totalGreetingsHTML.innerHTML = totalGreetings
    greetingDisplayHTML.innerHTML = greetingDisplay
}
}
}
myButton.addEventListener("click", greet)

function reset(){
    totalGreetings = 0
    greetingDisplay = [""]

    totalGreetingsHTML.innerHTML = totalGreetings
    greetingDisplayHTML.innerHTML = greetingDisplay
}

resetButton.addEventListener("click", reset)