
const button = document.querySelector(".submit");

// click event
// const result = (a,b) => {
//     if(a >  b ){
//         return [];
//     }
//     else{
//         const num = result(a,b - 1);
//         num.push(b);
//         console.log(b);
//         return num;
//     }
// }
let id = 0;
let val = "false";
const result = (a,b) => {
    const number =  document.querySelector('.num-result-section');
    number.innerHTML = "";
    
    for (var i = a; i <= b; i++){
        const element = document.createElement('div');
        element.setAttribute('class','number');
        const h1 = document.createElement("h1");
        const el = element.appendChild(h1);
        el.appendChild(document.createTextNode(`${i}`));
        number.appendChild(element);
    }
}   

button.addEventListener('click',() => {
    const h1 = document.querySelectorAll("h1");
    const startInputValue = document.querySelector(".start-input").value;
    const endInputValue = document.querySelector(".end-input").value;
    result(startInputValue,endInputValue);
   
 
})





