var myButton = document.querySelector(".button")
var greetingDisplayHTML = document.querySelector(".space")
var errorDisplayHTML  = document.querySelector(".errSpace")
var clearDisplayHTML = document.querySelector(".clearSpace")
var inputName = document.querySelector(".input")
var totalGreetingsHTML = document.querySelector(".total")
var resetButton = document.querySelector(".eraseBtn")
var checkedRadiobtn = document.querySelector('.rbtn')

        const storedWords = localStorage.getItem("counter")
        const storedString = JSON.parse(storedWords)

        if(localStorage.getItem("counter") && storedString){
        totalGreetingsHTML.innerHTML = storedString.length
        }

        else if(!localStorage.getItem("counter") && !storedString){
        totalGreetingsHTML.innerHTML = 0
        }

const greet = Greet()

function linkGreetToDom (){
       
        const pattern = /^[a-zA-Z]+$/;

        var radioBtn = document.querySelector("input[name='language']:checked");
        let nameReference  = inputName.value
        let nameRef = nameReference.toLowerCase() 
        
        if (!radioBtn){
        langRef = radioBtn
        }
        else if(radioBtn.value){
        langRef = radioBtn.value
        }

        if (!nameRef && ! langRef){
        greet.nameAndRadioError(nameRef, langRef)
        errorDisplayHTML.innerHTML = greet.getNameAndRadioError()
        setTimeout(function () {
        errorDisplayHTML.innerHTML = ""
        }, 6000) 
        }
        
        else if(!nameRef){
        greet.nameError(nameRef)
        errorDisplayHTML.innerHTML = greet.getNameError()
        setTimeout(function () {
        errorDisplayHTML.innerHTML = ""
        }, 6000)   
        }
        
        else if(!langRef){
        greet.radioError(langRef)
        errorDisplayHTML.innerHTML = greet.getRadioError()
        setTimeout(function () {
        errorDisplayHTML.innerHTML = ""
        }, 6000)    
        }

        if(nameRef && pattern.test(nameRef) == false && langRef){
            greet.nameNotAllowed(nameRef)
            errorDisplayHTML.innerHTML = greet.getNameNotAllowed()
            setTimeout(function () {
            errorDisplayHTML.innerHTML = ""
            }, 6000)
        }

        if (storedString && storedString.includes(nameRef)){   
        greet.nameAlreadyExist()
        errorDisplayHTML.innerHTML = greet.getNameAlreadyExist()
        setTimeout(function () {
        errorDisplayHTML.innerHTML = ""
        }, 6000)
        }

        else if(nameRef && pattern.test(nameRef) == true && langRef && storedString && !storedString.includes(nameRef)){
        greet.greetings(nameRef, langRef)
        greetingDisplayHTML.innerHTML = greet.getGreeting()
        setTimeout(function () {
        greetingDisplayHTML.innerHTML = ""
        }, 8000)
        if(radioBtn){radioBtn.checked = false} 
        inputName.value = ""
        }       

    greet.getCounter()
    const jsonString = JSON.stringify(greetingDisplay)
    localStorage.setItem("counter", jsonString)
    totalGreetingsHTML.innerHTML = greet.getCounter() 
}
myButton.addEventListener("click", linkGreetToDom)



function reset() {
    totalGreetingsHTML.innerHTML = 0
    localStorage.clear();

    greet.clearedCounter()
    clearDisplayHTML.innerHTML = greet.getClearedCounter()
    setTimeout(function () {
    clearDisplayHTML.innerHTML = ""
     }, 6000)
}
resetButton.addEventListener("click", reset)