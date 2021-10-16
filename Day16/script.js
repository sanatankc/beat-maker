const button = document.querySelector('.button');
const form = document.querySelector(".form");


button.addEventListener("click", () => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const inputValue  = document.querySelector("input").value;
    console.log(inputValue);
    if(inputValue.match(mailformat) === null){
        form.classList.add("border");
        } 
    else{
        form.classList.remove("border");
        }
})