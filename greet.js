var myButton = document.querySelector(".button")
var greetingDisplayHTML = document.querySelector(".space")
var errorDisplayHTML  = document.querySelector(".errSpace")
var inputName = document.querySelector(".input")
var totalGreetingsHTML = document.querySelector(".total")
var resetButton = document.querySelector(".eraseBtn")

var checkedRadiobtn = document.querySelector('.rbtn')

       

const greet = Greet()

const storedWords = localStorage.getItem("counter")
const storedString = JSON.parse(storedWords)

if(localStorage.getItem("counter")){
    totalGreetingsHTML.innerHTML = storedString.length
}


function linkGreetToDom (){
        var radioBtn = document.querySelector("input[name='language']:checked");
        let nameRef = inputName.value
        
        if (!radioBtn){
        langRef = radioBtn
        }
        else if(radioBtn.value){
        langRef = radioBtn.value
        }

        
        if (storedString && storedString.includes(nameRef)){
        greet.nameAlreadyExist(nameRef)
        errorDisplayHTML.innerHTML = greet.getNameAlreadyExist()
        setTimeout(function () {
        errorDisplayHTML.innerHTML = ""
         }, 6000)

        }
        
        if (!storedString || !storedString.includes(nameRef)){
        greet.greetings(nameRef, langRef)
        greetingDisplayHTML.innerHTML = greet.getGreeting()
        setTimeout(function () {
        greetingDisplayHTML.innerHTML = ""
        }, 10000)
        }
        

        greet.getCounter()
        const jsonString = JSON.stringify(greetingDisplay)
        localStorage.setItem("counter", jsonString)
        totalGreetingsHTML.innerHTML = greet.getCounter()

        greet.nameError(nameRef)
        errorDisplayHTML.innerHTML = greet.getNameError()
        setTimeout(function () {
        errorDisplayHTML.innerHTML = ""
        }, 6000)

        greet.radioError(langRef)
        errorDisplayHTML.innerHTML = greet.getRadioError()
        setTimeout(function () {
        errorDisplayHTML.innerHTML = ""
        }, 6000)

        


        if(radioBtn){radioBtn.checked = false} 
        inputName.value = ""
}
myButton.addEventListener("click", linkGreetToDom)



function reset() {
    totalGreetingsHTML.innerHTML = 0
}
resetButton.addEventListener("click", reset)