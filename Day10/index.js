// var text ="Shift the overall look and feel by adding these wonderful touches to furniture in your home";
// var url = "https://satyamchaudharydev.github.io/h100daysofcode/Day10/index.html";
// var hash_tags = "JS,JavaScript,100DaysOfCode,Programming";
// var fb = document.querySelector(".fa-facebook");
// var twitter = document.querySelector(".fa-twitter");

// console.log(twitter)
// var params = "menubar=no,toolbar=no,status=no,width=570,height=570"; // for window
// function ShareToTwitter(){
//    var Shareurl = `https://twitter.com/intent/tweet?text=${text}&url=  ${url}`;
//    window.open(Shareurl,"NewWindow" , params);
// }
// function ShareToFaceBook() {
//     var shareUrl = `http://www.facebook.com/sharer/sharer.php?quote=${text}&u=${url}`;
//     window.open(shareUrl,"NewWindow" , params);  
//    }

// twitter.addEventListener("click" ,function(){
//     console.log("sasd")
//     console.log(fb)
//     ShareToTwitter()
// })

// fb.addEventListener("click" ,function(){
//     console.log("sasd")
//     console.log(fb)
//     ShareToFaceBook()
// })


function rangeOfNumbers(startNum, endNum) {
    if(startNum > endNum){
        return [];
    }
    else{
      const num = rangeOfNumbers(endNum - 1);
        return "num";
    }
  };
console.log(rangeOfNumbers(2,4))  