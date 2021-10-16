var button = document.querySelector(".button");
var error = document.querySelector(".error");
var errortext = document.querySelector(".error-text");


console.log(error)
button.addEventListener("click" , function(){
    console.log("true")
    var inputText  = document.querySelector("input").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(inputText.match(mailformat) === null){
        error.classList.add('error-show');
        }; 
    if(inputText.match(mailformat) !== null){ 
        error.classList.remove('error-show');
        }; 
    })
button.addEventListener("click" , function(){

    var inputText  = document.querySelector("input").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.match(mailformat) === null)
{   
errortext.classList.add('error-show');
    
}; 
if(inputText.match(mailformat) !== null)
{   
errortext.classList.remove('error-show');
}; 
})