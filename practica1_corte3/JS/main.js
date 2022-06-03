let general = {
    
}
let array = [];

function mostrarProductos(){

   let categoria = document.getElementById("categoria").value;
   let producto = document.getElementById("producto").value;
   let precio = document.getElementById("precio").value;
   precio = parseInt(precio);
   let cantidad = document.getElementById("cantidad").value;
   cantidad = parseInt(cantidad);

   general = new Object();
   general.categoria = categoria;
   general.producto = producto;
   general.precio = precio;
   general.cantidad = cantidad;

   array.push(general);
   console.log(array);
   

}
function listas(){
    let categoria = document.getElementById("categoria").value;
    let producto = document.getElementById("producto").value;
    let precio = document.getElementById("precio").value;
    precio = parseInt(precio);
    let cantidad = document.getElementById("cantidad").value;
    cantidad = parseInt(cantidad);
    let lista_total ={
        "categoria" : categoria,
        "producto" : producto,
        "precio" : precio,
        "cantidad" : cantidad
    }
    return lista_total;
}

//Punto 1
function principio_lista(){
    array.unshift(listas());
    console.log(array);
}

//Punto 2
function final_lista(){
    array.push(listas());
    console.log(array);
}

//Punto 3
function buscar_categoria(){
    let buscarcat= prompt("Ingrese la categoria")
    let arregloCat= array.filter(objecto => objecto.categoria == buscarcat)
    let totalcat=arregloCat.length
    console.log(`categoria encontrada ${buscarcat}
    El total de la categoria es ${totalcat}`)
    }

//Punto 4
function total_produc(){
    let contTotal = 0;
    array.forEach(element => {
        contTotal = contTotal + element.cantidad;
    });
    alert("La cantidad total de productos es de: "+contTotal);
}

//Punto 5
function valor_total(){
    let contTotal = 0;
    array.forEach(element => {
        contTotal = contTotal + element.precio;
    });
    alert("el valor total de todos los productos es de: "+contTotal);
}

// Punto 6
function aumentar(){
    let buscarpro= prompt("Ingrese el producto")
    let canti = parseInt(prompt("ingrese cuantas unidades desea sumar"))
    let arree= array.findIndex(objecto => objecto.producto == buscarpro)
    array[arree]["cantidad"] +=canti
}

// Punto 7
function disminuir(){
    let buscarpro= prompt("Ingrese el producto")
    let canti = parseInt(prompt("ingrese cuantas unidades desea restar"))
    let arree= array.findIndex(objecto => objecto.producto == buscarpro)
    array[arree]["cantidad"] -=canti
}

//Punto 8
function buscar_producto(){
    let nombre = document.getElementById("nombreProducto").value;
    console.log(nombre);
    const productoEncontrado = array.find(element => element.producto === nombre)
    if (productoEncontrado != null){
        alert("Si existe ese producto");
    }
    else{
        alert("No existe un producto con ese nombre")
    }
}

//punto 9
function eliminar_elemento (){
    let buscar= prompt("Ingrese el producto que desea eliminar")
    let productoBuscado = array.findIndex(produTotal=> produTotal.producto == buscar);
    array.splice(productoBuscado,1);
}

//Putno 10
function orden_alfabetico(){
    let ordenar = [];
    for (let i = 0; i < array.length; i++){
        ordenar.push(array[i].producto)
    }
    let alf = ordenar.sort((a,b)=>{
        if (a==b){
            return 0;
        }
        if (a<b){
            return -1;
        }
        if (a>b){
            return 1;
        }
    })
    console.log(alf);
}

//localStorage
if(localStorage.getItem("usuario")!=null){
    alert("Bienvenid@ "+localStorage.getItem("usuario"));
  }
  else{
    let nombre= prompt("ingrese nombre");
    localStorage.setItem("usuario",nombre);
  }

  // uso del .map 
function cat(){
    console.log("Las categorias que hay son:")
    busquedaCat = array.map(buscar => buscar.categoria);
    console.log(busquedaCat);
}

// uso del .reduce
function suma_reduce(){
    const busquedaCat = array.reduce((acum,suma) =>{
        return acum += suma.cantidad;
    },0);
    console.log("La suma total de todas las cantidades es "+busquedaCat);
}


