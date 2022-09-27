const btn = document.getElementById("btn");
var iniciarTimer = null;

var cancelar = document.getElementById('cancelar');

var hora = document.getElementById("hora");
var minutos = document.getElementById("minutos");
var segundos = document.getElementById("segundos");

btn.addEventListener("click", ()=>{

    if(btn.innerText === "Iniciar"){
        btn.innerText = "Pausar";
        iniciarTimer = setInterval(function() {
            timer();
        }, 1000);
    }else {
        btn.innerText = "Iniciar";
        pausarTimer = clearInterval(iniciarTimer);
    } 
})

var audio = document.getElementById("sound");


function timer(){
    if(hora.value == 0 && minutos.value == 0 && segundos.value == 0){
        hora.value = 0;
        minutos.value = 0;
        segundos.value = 0;
        audio.play()
    } else if(segundos.value != 0){
        segundos.value--;
    } else if(minutos.value != 0 && segundos.value == 0){
        segundos.value = 59;
        minutos.value--;
    } else if(hora.value != 0 && minutos.value == 0){
        minutos.value = 60;
        hora.value--;
    }
    return;
}



cancelar.addEventListener('click', function(){
    hora.value = 0;
    minutos.value = 0;
    segundos.value = 0;
    pararTimer()
})



function pararTimer() {
    clearInterval(iniciarTimer);
    
}

document.addEventListener("keypress", function(e) {
    if(e.key === 'i') {
    
        var teclaI = document.querySelector("#btn");
      
      teclaI.click();
    

    } else if ((e.key === 'p')) {
        var teclaP = document.querySelector("#btn");
      
        teclaP.click();
    } else if ((e.key === 'c')) {
        var teclaC = document.querySelector("#cancelar");
      
        teclaC.click();
    }
  });


