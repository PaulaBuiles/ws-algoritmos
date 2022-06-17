
//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
import {formulario_register} from "./practica.js";
import {contenedor_login_register} from "./practica.js";
import {caja_trasera_login} from "./practica.js";
import {caja_trasera_register} from "./practica.js";
import {formulario_login} from "./practica.js";

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}


// const divContainer= document.getElementById("container");
const buttonAdd= document.getElementById("addBtn");
// const buttonListUser= document.getElementById("listUsersBtn");

buttonAdd.addEventListener("click",addUser);
// buttonListUser.addEventListener("click",getUsers);

const url= "https://62a72effbedc4ca6d7c412fe.mockapi.io/";
let users=[];

// const getInfo=async(resource)=>{
//     const response= await fetch(url+resource);
//     return response.json();
// }

// async function getUsers(){
//     users=await getInfo("inicioSesion");
//     // showInfo();
//     // showInfo2();
// }

// async function showInfo(){
//     divContainer.innerHTML="";
//     users.forEach(item=>{
//         divContainer.innerHTML+=item.nombre+"<br>";
//     })
//     console.log(users);
// }
// async function showInfo2(){
//     divContainer.innerHTML="";
//     users.forEach(item=>{
//         divContainer.innerHTML+=item.email+"<br>";
//     })
// }

function addUser(){
    let nombre=prompt("Ingrese el nombre");
    let email= prompt("ingrese su correo");
    let adress= prompt("ingrese su dirección de entrega");
    let user={
        nombre:nombre,
        email:email,
        adress:adress
    }
    users.push(user);
    // showInfo();
    // showInfo2();
    saveUser(user);

    alert("Su usuario se ha registrado con éxito, para volver a la pagina principal de click en la casita");
}


function saveUser(user){
    fetch(url+"inicioSesion",{
        method:'POST',
        body:JSON.stringify(user),
        headers:{
            "Content-type":"application/json"
        }
    })
    .then(response=>response.json());
}