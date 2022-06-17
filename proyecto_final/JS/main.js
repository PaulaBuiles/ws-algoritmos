'use strict';
let btnMenu = document.getElementById('btn-menu');
let mainNav = document.getElementById('main-nav');
btnMenu.addEventListener('click', function(){
  mainNav.classList.toggle('mostrar');
});

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}

function Prev() {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length -1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}

btnRight.addEventListener('click', function(){
  Next();
});

btnLeft.addEventListener('click', function(){
  Prev();
});

setInterval(function(){
  Next();
}, 5000);

function buscar_producto(){
  let nombre = document.getElementsByClassName("product__title").value;
  console.log(nombre);
  let nombre_producto = prompt("que producto desea buscar");
  // if(nombre_producto == nombre){

  
  // const productoEncontrado = nombre.find(element => element.nombre == nombre)
  if (nombre_producto != null){
      alert("El producto esta disponible, buscar en la seccion productos");
  }
  else{
      alert("Lo sentimos no existe un producto con ese nombre o no está disponible por el momento");
  }
}

const valor_noNeceitado = () => "chaqueta";

try {
  const valor = valor_noNeceitado ();
  if (valor === "chaqueta")throw new Error ("Este valor no se necesita en la lista de productos");
} catch (error) {
  console.log(error);
}

console.log("Continuaremos con la ejecución sin problemas");

