'use strict';
let clickbutton = document.querySelectorAll('.button')
let clickbutton1 = document.querySelectorAll('.button1')
let carrito =[];
const tbody = document.querySelector(".tbody");

clickbutton.forEach(btn =>{
    btn.addEventListener('click', addCarrito);
})

clickbutton1.forEach(btn =>{
    btn.addEventListener('click', addCarrito1);
})
function addCarrito(e){
    const butt = e.target
    const item = butt.closest('.product_new');
    const itemTitulo = item.querySelector('.product__title').textContent;
    const itemPrecio = item.querySelector('.product__price').textContent;
    const itemImg = item.querySelector('.product__img').src;

    const newCarrito ={
        title: itemTitulo,
        precio: itemPrecio,
        img: itemImg,
        cantidad: 1
    }
    // console.log (newCarrito)
    addItemCarrito(newCarrito);
}

function addCarrito1(e){
    const butt = e.target
    const item = butt.closest('.product');
    const itemTitulo = item.querySelector('.product__title').textContent;
    const itemPrecio = item.querySelector('.product__price').textContent;
    const itemImg = item.querySelector('.product__img').src;

    const newCarrito ={
        title: itemTitulo,
        precio: itemPrecio,
        img: itemImg,
        cantidad: 1
    }
    // console.log (newCarrito)
    addItemCarrito(newCarrito);
}
 function addItemCarrito (newCarrito){

     const InputElemento = tbody.getElementsByClassName('input__elemento')
     for(let i =0; i < carrito.length ; i++){
         if(carrito[i].title.trim() === newCarrito.title.trim()){
         carrito[i].cantidad ++;
         const inputValue = InputElemento[i]
         inputValue.value++;
         CarritoTotal()
         return null;
         }
     }
     carrito.push(newCarrito);
     ejecutarCarrito();
 }

function ejecutarCarrito(){
    
    tbody.innerHTML = ''
    carrito.map(item=>{
        const tr = document.createElement('tr');
        tr.classList.add('ItemCarrito');
        const Content = `
         <th scope="row">1</th>
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title">${item.title}</h6>
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">x</button>
            </td>
    
    `
    tr.innerHTML = Content;
    tbody.appendChild(tr)

    tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
    tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
  })
  CarritoTotal()

}

function CarritoTotal(){
    let total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal')
    carrito.forEach((item)=>{
        const precio = Number(item.precio.replace("$", ' '))
        total = total + precio*item.cantidad;
    })

    itemCartTotal.innerHTML = `Total $${total}.000`
    addLocalStorage()
}

function removeItemCarrito(e){
    const buttonDelete = e.target
    const tr = buttonDelete.closest(".ItemCarrito") 
   
    const title = tr.querySelector('.title').textContent;
    for(let i =0; i<carrito.length; i++){
        if(carrito[i].title.trim() === title.trim()){
            carrito.splice(i, 1)
          }
    }
    tr.remove()
    CarritoTotal()
}

function sumaCantidad(e){
    const sumaInput = e.target;
    const tr = sumaInput.closest(".ItemCarrito");
    const title = tr.querySelector('.title').textContent;
    carrito.forEach(item =>{
        if(item.title.trim()===title){
            sumaInput.value< 1 ? (sumaInput.value = 1) : sumaInput.value;
            item.cantidad = sumaInput.value;
            CarritoTotal()
        }
    })
}

//BOTON DE COMPRA
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('¡¡Tu compra se ha realizado exitosamente!!')
  })
}

function addLocalStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

window.onload = function(){
    const storage= JSON.parse(localStorage.getItem('carrito'));
    if(storage){
        carrito = storage;
        ejecutarCarrito()
    }
}
