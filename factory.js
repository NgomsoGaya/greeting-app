let greetingDisplay = []

function Greet() {

let msg = ''
let errorMsg = ""

    function greetings(name, lang){ 
        
        if (lang == 'isiXhosa') {
                if(name){msg = "Molo, " + name}
                if(greetingDisplay && !greetingDisplay.includes(name) && name){
                    greetingDisplay.push(name)
                }
               
            }
        else if (lang == 'English') {
                if(name){msg = "Hello, " + name}
                if(greetingDisplay && !greetingDisplay.includes(name) && name){
                    greetingDisplay.push(name)
                }
                
            }
        else if (lang == 'Afrikaans') {
                if(name){msg = "Hallo, " + name}
                if(greetingDisplay && !greetingDisplay.includes(name) && name){
                    greetingDisplay.push(name)
                }
                
            }

        }

    function getGreeting(){
        return msg
        }
    
    function getCounter(){
            return greetingDisplay.length
        }

    function nameError(name){
        if(!name){
            errorMsg = "Please enter your name!"
        }
    } 

    function getNameError(){
        return errorMsg
    }

    function radioError(lang){
        if(!lang){
            errorMsg = "Please select a language!"
        }
    }

    function getRadioError(){
        return errorMsg
    }

    function nameAlreadyExist(){
              errorMsg = "Name is already greeted!"
    }

    function getNameAlreadyExist(){
         return errorMsg
    }
    function nameAndRadioError(name, lang){
        if(!name && !lang){
            errorMsg = "Please enter your name and select a language!"
        } 
    }
    function getNameAndRadioError(){
        return errorMsg
    }

    function clearedCounter(){
        errorMsg = "You have cleared the counter!"
    }

    function getClearedCounter(){
        return errorMsg
    }

    function nameNotAllowed(name){
        errorMsg = "Numbers and special characters are not allowed!"
    }

    function getNameNotAllowed(){
        return errorMsg
    }
    return {
        greetings,
        getGreeting,
        getCounter,
        nameError,
        getNameError,
        radioError,
        getRadioError,
        nameAlreadyExist,
        getNameAlreadyExist,
        nameAndRadioError,
        getNameAndRadioError,
        clearedCounter,
        getClearedCounter,
        nameNotAllowed,
        getNameNotAllowed
       }
    } 
    //GREETINGS