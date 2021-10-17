const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const stop = document.querySelector('.stop')
const circle = document.querySelectorAll('.circle')
const play = document.querySelector('.play')
const input = document.querySelector('input')

let data = []
let timing = 300;
let interval;
let intervalFunction;
let currentBeat  = 0;
console.log(data);

data.push(one.children,two.children,three.children);
let kick = new Audio('./drum.wav')
let snare = new Audio('./snare.wav')
let hihat = new Audio('./hat.wav')

const playSound = ((child) => {
    kick = new Audio('./drum.wav')
    snare = new Audio('./snare.wav')
    hihat = new Audio('./hat.wav')
    if (one.contains(child)) {
        // kick.pause();
        // kick.currentTime = 0;
        kick.play();
    }
    if (two.contains(child)) {
        // snare.pause();
        // snare.currentTime = 0;
        snare.play();
    }
    if (three.contains(child)) {
        // hihat.pause();
        // hihat.currentTime = 0;
        hihat.play();
    }

})

const musicBlock = (index) => {
  circle.forEach((element, i) => {
      if (i === index) {
        element.classList.toggle('update');
        if (element.classList.contains('update')) {
          playSound(element);
        }
      }
  });
}


circle.forEach((element, i) => 
    element.addEventListener('click', () => musicBlock(i)
))
let index = 0;
const playPause = (inter) => {
    if(index === 0){
        index = 1;
        play.innerHTML = `<i class="fa fa-pause" aria-hidden="true"></i>
        `;

    }
    else{
        clearInterval(inter);
        inter = null; 
        index = 0;
        play.innerHTML = `<i class="fa fa-play" aria-hidden="true"></i>`;

       
    }
}
play.addEventListener("click", () => {
    console.log(interval);
    
    playPause(interval);
    const playBeat = (currentBeat) => {
        kick = new Audio('./drum.wav')
        snare = new Audio('./snare.wav')
        hihat = new Audio('./hat.wav')
        if(data[0][currentBeat]){
            data[0][currentBeat].classList.add('scale');

        }
        if(data[1][currentBeat]){
            data[1][currentBeat].classList.add('scale');

        }
        if(data[2][currentBeat]){
            data[2][currentBeat].classList.add('scale');

        }
        if (data[0][currentBeat].classList.contains("update")) {
        kick.play();
        }

        if (data[1][currentBeat].classList.contains("update")) {
        snare.play();
        }
    
        if (data[2][currentBeat].classList.contains("update")
        ) {
        hihat.play()
        }
    
    }
   
     intervalFunction = (time) => {
    interval =  setInterval(() => {
        playBeat(currentBeat)
        
        circle.forEach((el,index)=>{
            if (index !== currentBeat && index !== currentBeat + 8 && index !== currentBeat + 16){
                    el.classList.remove('scale');
              }
            })
        
            if (currentBeat === 7) {
                currentBeat = 0
            }
            else {
                currentBeat += 1
            }
        }, time)
    }
    if(index === 1){
        intervalFunction(timing)    
    }

})
let stopCount = 0;
stop.addEventListener("click",() =>{
    console.log("sa")
    if(stopCount === 0){
    currentBeat = 0;
    clearInterval(interval);
        interval = null; 
        circle.forEach(el => el.classList.remove('scale'))
        stopCount = 1;
    }
    else{
        console.log("else")
        intervalFunction(timing);
        stopCount = 0;


    }
})

const mapRange = (obj, num) =>
  ((num - obj.from[0]) * (obj.to[1] - obj.to[0])) /
    (obj.from[1] - obj.from[0]) +
  obj.to[0]

input.addEventListener("change",() => {
    let inputValue = input.value;
    let bpm = Math.floor(1000 * 60 / input.value);
    clearInterval(interval);
    interval = null;
    if (intervalFunction) {
        intervalFunction(inputValue)
    }
    document.querySelector('.bpm-text').innerText = `BPM - ${inputValue}`
})
