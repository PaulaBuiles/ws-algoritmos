
let general = {
    
}
let array = [];
let categoriaArr = [];
let j = 0;

function mostrarProductos(){

   let categoria = document.getElementById("categoria").value;
   categoriaArr[j] = categoria;
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
    let cont = 0;
    for (let j = 0; j < categoriaArr.length;j++){
        categoria1 = array.filter(lista_total => lista_total.categoria === categoriaArr[j]);
       console.log(`Hay ${categoria1.length} productos en la categoria ${categoriaArr[j]}`)
    }
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

//Punto 6
function disminuir(){
    let name = document.getElementById("disminuir2").value;
    let cant = document.getElementById("disminuir3").value;
    cant = parseInt(cant);

    for(let i = 0; i < array.length; i++){
        if( array[i].producto == name && array [i].cant>0){
            array[i].cantidad -= cant;
        }
        else{
            console.log();
        }
    }
    console.log("PRODUCTO DISMINUIDO: ");
    console.log(JSON.stringify(localStorage));
}
//Punto7
function aumentar(){
    let name = document.getElementById("aumentar2").value;
    let cant = document.getElementById("aumentar3").value;
    cant = parseInt(cant);

    for(let i = 0; i < array.length; i++){
        if( array[i].producto == name && array [i].cant>0){
            array[i].cantidad += cant;
        }
        else{
            console.log();
        }
    }
    console.log("PRODUCTO AUMENTADO: ");
    console.log(JSON.stringify(localStorage));
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
function eliminar_elemento (producto){
    let productoBuscado = array.find(produTotal=> produTotal.producto == producto);
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