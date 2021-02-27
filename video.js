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