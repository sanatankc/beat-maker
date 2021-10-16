// const bar = document.querySelectorAll('.bar');
// const baru = document.querySelector('.bar')
// const play = document.querySelector('.play');
// const bars1 = document.querySelector('.bars1');
// const bars2 = document.querySelector('.bars2');
// const bars3 = document.querySelector('.bars3');
// const bars4 = document.querySelector('.bars4');
// const bars5 = document.querySelector('.bars5');
// const bars = document.querySelector('.bars');

// const fa = document.querySelector('.fa-play');
// const playText = document.querySelector('.play-text');
// const audio1 = document.querySelector('.clap');
// const audio2 = document.querySelector('.hihat');
// const audio3 = document.querySelector('.kick');
// const stop = document.querySelector('.stop');
// const clear = document.querySelector('.clear');
// const barsSection = document.querySelector('.bars-section');

// const redo = document.querySelector('.fa-redo');
// const playStat = document.querySelector('.music-play-stat');
// const playCircle = document.querySelector('.moving-circle');
// const movingLine = document.querySelector('.moving-line')
// const addedIcon = document.querySelectorAll('.added-icon')
// let data = [];
// let currentBeat = 0;
// let interval;
// let intervalFunction;
// let timing = 300;
// let click = 0;
// let index = 0;
// let leftPos = 10;

// console.log(bar.length/5)
// let num  = 0;
// // const scalePlay = (num) => {
// //     bar.forEach((el,index)=>{
// //         for(var i = 0;  i <= 24; i+=6){
// //         console.log(i)
// //         if (index !== currentBeat + i){
// //             el.classList.remove('scale')} 
// //         }})
// // }

// const checkParent = ((child) => {
//     if (bars1.contains(child)){
//         audio1.play()
//     }
//     if(bars2.contains(child)){
//         audio2.play()
//     }
//     if(bars3.contains(child)){
//         audio3.play()
//     }

// })

// data.push(bars1.children,bars2.children,bars3.children,bars3.children,bars4.children,bars5.children);
// console.log(data);
// data.forEach((el,index) => {
//     console.log(el[index][index])
// })
// const barClick = (index) => {
//     bar.forEach((element, i) => {
//     if(click === 0){
//       if (i === index) {
//         checkParent(element);
//         element.classList.add('update');
//         click = 1;
//     }
//     }
//     else{
//         if (i === index) {
//           element.classList.remove('update');
//           click = 0;
//       }
//       }
      
//     });
//   }

// //   playpause
// const playPause = (inter) => {
//     if(index === 0){
//         index = 1;

//         console.log("added");
//         fa.classList.replace('fa-play','fa-pause');
//         playText.innerText = "Pause";
//     }
//     else{
//         clearInterval(inter);
//         fa.classList.replace('fa-pause','fa-play')
//         playText.innerText = "Play";

//         console.log("remove")
//         inter = null; 
//         index = 0;

       
//     }
// }
// let pushed = []
// for(var i=0; i < data.length;i++){
//     console.log(i)
//     for(var k=0; k < data.length;k++){  
//     pushed.push(data[i][k])
//     data[i][k].setAttribute("data-text", `${k}`);     //changes "data-myval" to "20"
// } 
// }
//  pushed.sort((a,b) => {
//     return a.getAttribute("data-text") - b.getAttribute("data-text");
// })  
// console.log(pushed)

// // data.forEach((el,index) => {
// //     data[index].setAttribute("data-myval", "20");     //changes "data-myval" to "20"
    
// // })
// bar.forEach((element, i) => 
//     element.addEventListener('click', () => barClick(i)
//     )
  
//   )

// //   playingg....


// play.addEventListener("click", () => {

//     playPause(interval);
//     const playBeat = (currentBeat) => {

//         data.forEach((el,index) => {
//             console.log(index,currentBeat)

//             if(currentBeat === index ){
                
//                 data.forEach((el,i) => {
//                     if(index === i){
//                         el[i].classList.add('scale');
//                     }
//                     else{
//                         el[i].classList.remove('scale')
//                     }
//             })
                
//             }
            
//         })
        
//         if (data[0][currentBeat].classList.contains("update")) {
//         audio1.play();
//         console.log(data[0][currentBeat].getBoundingClientRect().x)
//         addedIcon[0].classList.add('update-icon')

//         }
//         else{

//              addedIcon[0].classList.remove('update-icon')

//         }

//         if (data[1][currentBeat].classList.contains("update")) {
//         audio2.play();

//         addedIcon[1].classList.add('update-icon')


//         }
//         else{
//             addedIcon[1].classList.remove('update-icon')
//         }
    
//         if (data[2][currentBeat].classList.contains("update")
//         ) {
//         audio3.play()
//         addedIcon[2].classList.add('update-icon')


//         }
//         else{
//             addedIcon[2].classList.remove('update-icon')

//         }
//     }
   
//      intervalFunction = (time) => {
//     interval =  setInterval(() => {
//         playBeat(currentBeat)
//         barsSection.classList.add('update-bars-section');
//         movingLine.style.width = `${leftPos}` +'px';

//         document.querySelector(':root').style.setProperty('--left',`${leftPos}` +'px');


//             if (currentBeat === 5) {
//                 currentBeat = 0;
//                 leftPos =  20;

//             }
//             else {
//                 leftPos += 85;
//                 currentBeat += 1
//             }

//         }, time)
//     }

//     if(index === 1){
//         intervalFunction(timing);
//     }
// })

// // stop 
// let stopCount = 0;
// stop.addEventListener("click",() =>{
//     if(stopCount === 0){
//     currentBeat = 0;
//     // leftPos = 0;

//     clearInterval(interval);

//     interval = null; 
//     leftPos = 0;
//     bar.forEach(el => el.classList.remove('scale'))
//     stopCount = 1;
//     }
//     else{
//         intervalFunction(timing);
//         stopCount = 0;

//     }
// })

// // clear
// clear.addEventListener("click",() =>{
//         redo.classList.toggle('clear-rotate')
//         bar.forEach(el => el.classList.remove('update'))
    
// })
// let barLisy =0;
// document.querySelector('.list').addEventListener('click',() =>{
//     console.log("clicked");
//     // Create a new paragraph element, and append it to the end of the document body
//     let div = document.createElement("div");
//     div.classList.add('bar')
//     bars.forEach(el => el.appendChild(div))



// })


// console.log(data[0][0])
