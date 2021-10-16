const menuBar = document.querySelector('.menu-bar');
console.log(menuBar)
menuBar.addEventListener('click',function(){
    menuBar.classList.toggle('close');
    console.log("n")
})