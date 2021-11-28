var pausa=true;
let video=document.getElementById("MesActual-video");
let imagen=document.getElementById("video-img");

imagen.addEventListener("click",function(){
        imagen.className+="ocultar";
        video.className-="ocultar";
        video.play();
        pausa=false;
});

video.addEventListener("click",function(){
    if (pausa==true){
        video.play();
        pausa=false;
    } else{
        video.pause();
        pausa=true;
    }
});

//For initialize the conffeti
var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

setTimeout(function(){ $("#my-canvas").fadeOut(500) }, 10000);