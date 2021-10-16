var button = document.querySelector(".submit-btn");
var input = document.querySelectorAll(".input");

button.addEventListener("click" , function(){

    var firstName  = document.querySelector(".first-name").value;
    var lastName  = document.querySelector(".last-name").value;
    var email  = document.querySelector(".email").value;
    var password  = document.querySelector(".password").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(firstName == ""){
        console.log("satyam")
        input[0].classList.add("err")
    }
    else{
        input[0].classList.remove("err")
    }

    if(lastName == ""){
        input[1].classList.add("err")

    }
    else{
        input[1].classList.remove("err")
    }
    
    if(email.match(mailformat) === null){
        input[2].classList.add("err")
        }; 
    if(email.match(mailformat) !== null){ 
        input[2].classList.remove("err")

        }; 

    if(password == ""){
            input[3].classList.add("err")    
        }
        else{
            input[3].classList.remove("err")
        }
           
    });
