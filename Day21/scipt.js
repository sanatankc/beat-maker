const grid = document.querySelectorAll('.grid');
let index = 0;



grid.forEach(el => {
    el.addEventListener('click',() =>{
        if(index === 0){
            el.classList.add('update')
            index =1
        }
        
        else{
            index = 0 
            el.classList.add('update')
          }
})
})