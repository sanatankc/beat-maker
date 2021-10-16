var button = document.getElementById("button");
var error = document.getElementById("error");
var derror = document.getElementById("derror");
var dbutton = document.getElementById("dbutton");

button.addEventListener("click" , function(){

    var inputText  = document.getElementById("input").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.match(mailformat) === null)
{   
error.classList.add('error');
    
}; 
if(inputText.match(mailformat) !== null)
{   
error.classList.remove('error');
}; 
})
console.log(dbutton)
dbutton.addEventListener("click" , function(){

    var inputText  = document.getElementById("dinput").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.match(mailformat) === null)
{   
derror.classList.add('d-error');
    
}; 
if(inputText.match(mailformat) !== null)
{   
derror.classList.remove('d-error');
}; 
})