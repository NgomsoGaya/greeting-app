let greetingDisplay = []

let userInput = /^[a-zA-Z]+$/

let msg = ''
let errorMsg = ""

function Greet() {
    
    function greetings(name, lang){ 
        
        if (lang == 'isiXhosa') {
                if(name){msg = "Molo, " + name}
                if(!greetingDisplay.includes(name) && name){
                    greetingDisplay.push(name)
                }
               
            }
        else if (lang == 'English') {
                if(name){msg = "Hello, " + name}
                if(!greetingDisplay.includes(name) && name){
                    greetingDisplay.push(name)
                }
                
            }
        else if (lang == 'Afrikaans') {
                if(name){msg = "Hallo, " + name}
                if(!greetingDisplay.includes(name) && name){
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

    function nameAlreadyExist(name){
              errorMsg = "Name is already greeted!"
      }

     function getNameAlreadyExist(){
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
        getNameAlreadyExist
       }
   
       
    } 
    //GREETINGS