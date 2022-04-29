//1 lo que hace mi funcion es que defino el id en el html y creo un boton con el nombre pink, y en el js lo que pasara es que
// recibira por referencia lo que yo le mande.

function cambiarColor (newColor){
  let elemento= document.getElementById("color");
  elemento.style.color = newColor;
}

//2. element.getElementsByTagName(name) me mostrara la cantidad de h2 (en este caso) que tengo en el html.

let titulos = document.getElementsByTagName("h2");
alert("Hay "+titulos.length+" elementos de h2" );

//3. document.createElement(name) lo que hace es crear nuevos elementos desde js, pueden ser div, li, ul entre muchos otros.
let crearP = document.createElement("p");
crearP.innerHTML= "Nuevo texto";
document.body.appendChild(crearP);

/* 4. parentNode.appendChild(node) y element.innerHTML estan en el punto anterior*/
// 6. element.style.left me ubica el texto a la izquierda.
function funcionDiv(){
  alert(document.getElementById("Div").style.left );
}

// 7. element.setAttribute le da un atributo a un objeto, yo en este caso le di el atributo de que cuando le de en el boton podra convertir en un link el texto.
function fun(){
  document.getElementById("link").setAttribute("href","https://www.javatpoint.com/");  
}

// 8. element.element.getAttribute me muestra los atributos de un texto o lista o lo que yo quiera, en este caso quiero ver el estilo.
function fun2() {  
  var valor = document.getElementById("div").getAttribute("style");  
  document.getElementById("p").innerHTML = valor; 
}

// 9. element.addEventListener
document.getElementById("miBoton").addEventListener ("click",fun3());
function fun3(){
  alert ("Hola profe!!!");
}  

//10. window.scrollTo

function scroll() {
  window.scrollTo(100, 100);
}

//11. setTimeOut

var timeout;
function mostrarAlerta(){
  timeout = setTimeout(alert,3000,'hola, debes dar en cancelar para que ya no aparezca.');
}
function cancelarAlerta() {
  clearTimeout(timeout);
}
//12. setInterval
var cambiar;
function cambiarColores(){
  cambiar = setInterval(cambiaTexto, 1000)
}
function cambiaTexto(){
  var elemt = document.getElementById("mensaje");
  elemt.style.color = elemt.style.color == "red" ? "blue" : 
"red";
}
function pararCambioDeColor(){
  clearInterval(cambiar);
}

// 13. Comfirm
function Fun4() {
  confirm("Acepta o cancela");
}
// 14. Arreglos: ForEach()
let arreg =["Helado","Maracuya","ropa de bebe","celulares","termo"]
alert(`Hay ${arreg.length} datos`);