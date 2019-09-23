var audio = document.querySelectorAll("audio");
var btn = document.querySelectorAll("button");
var buttonKeys = [65,83,68,70,71,72,74,75,76];

document.body.addEventListener('keydown',function(e) {
    for(var i = 0; i<= buttonKeys.length; i++) {
        if(e.keyCode === buttonKeys[i]) {
            btn[i].style.boxShadow = "10px 5px 5px #010b13";
            btn[i].style.transform = "scale(1.1)";
            audio[i].play();
            audio[i].currentTime = 0;
        }
    }
})
document.body.addEventListener('keyup',function(e) {
    for(var i = 0; i<= buttonKeys.length; i++) {
        if(e.keyCode === buttonKeys[i]) {
            btn[i].style.boxShadow = "";
            btn[i].style.transform = "scale(1.0)";
        }
    }
})