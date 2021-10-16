const text = document.querySelector('h1');
const stop = document.querySelector(".stop");
const start = document.querySelector(".start");
const input = document.querySelector("input");


console.log("text")
let interval;
let timing = 00;
let index = 0;
let no = 0;


start.addEventListener("click", () => {
     if(index === 0){
        interval = setInterval(() =>{
            text.classList.toggle("animation")
            no++;
            text.innerHTML = no;
        },interval)
        }

})





stop.addEventListener("click", () => {
    clearInterval(interval)
    interval = null;
})

// input.addEventListener("change" , () => {
//     const inputValue = input.value;
//     interval = inputValue;

// })

