document.getElementById('player').addEventListener("mouseover",sumarPuntos);

var puntos=0;
var tiempo=50;
var puntosObjetivo=50;

function sumarPuntos(){
 puntos++;
 document.getElementById("score").innerHTML= "PUNTOS: <b>"+puntos+ "/"+puntosObjetivo+"</b>";
 let ranNum= Math.round(Math.random()*500); //esta linea de codigo funciona para que cuanod el usuario pase por en cima de la bolita morado el raton del mouse, esta se mueva y cambie de posicion.
 let ranNum2= Math.round(Math.random()*500);
 document.getElementById("player").style.marginTop=ranNum+"px";
 document.getElementById("player").style.marginLeft=ranNum+"px";
 if(puntos==50){
     alert("Felicidades ganaste el juego");
 }
}

function restarTiempo(){
    tiempo--;
    document.getElementById("score").innerHTML= "PUNTOS: <b>"+puntos+ "/"+puntosObjetivo+"</b>";
    document.getElementById("time").innerHTML=" Tiempo: "+tiempo+ " ";
    if(tiempo==0){
        alert("¡Perdiste el juego!");
        tiempo=50;
        puntos=0;
    }
}

setInterval(restarTiempo,500);


