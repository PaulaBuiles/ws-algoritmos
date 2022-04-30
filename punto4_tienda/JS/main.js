let bono=0;
let totalCompra=0;
let total=0;
function huevos(){
    let lista1 = document.createElement("li");
    let cantidad = parseFloat(document.getElementsByName("huevos")[0].value);
    lista1.textContent = cantidad;

    let lista2 = document.createElement("ul");
    document.body.appendChild(lista2).style.color = "white";

    lista2.appendChild(lista1);

    let valor = 15000;
    let compra = cantidad*valor;

    totalCompra += compra;

    let lista3 = document.createElement("li");
    lista3.textContent = compra;
    lista2.appendChild(lista3);
}
function leche(){
    let lista1 = document.createElement("li");
    let cantidad = parseFloat(document.getElementsByName("leche")[0].value);
    lista1.textContent = cantidad;

    let lista2 = document.createElement("ul");
    document.body.appendChild(lista2).style.color = "white";

    lista2.appendChild(lista1);

    let valor = 3500;
    let compra = cantidad*valor;

    totalCompra += compra;

    let lista3 = document.createElement("li");
    lista3.textContent = compra;
    lista2.appendChild(lista3);
}
function pan(){
    let lista1 = document.createElement("li");
    let cantidad = parseFloat(document.getElementsByName("pan")[0].value);
    lista1.textContent = cantidad;

    let lista2 = document.createElement("ul");
    document.body.appendChild(lista2).style.color = "white";

    lista2.appendChild(lista1);

    let valor = 2000;
    let compra = cantidad*valor;

    totalCompra += compra;

    let lista3 = document.createElement("li");
    lista3.textContent = compra;
    lista2.appendChild(lista3);
}
function frutasM(){
    let lista1 = document.createElement("li");
    let cantidad = parseFloat(document.getElementsByName("frutas")[0].value);
    lista1.textContent = cantidad;

    let lista2 = document.createElement("ul");
    document.body.appendChild(lista2).style.color = "white";

    lista2.appendChild(lista1);

    let valor = 5000;
    let compra = cantidad*valor;

    totalCompra += compra;

    let lista3 = document.createElement("li");
    lista3.textContent = compra;
    lista2.appendChild(lista3);
}
function descuento(){
    bono= Math.ceil(Math.random()*15000);
    alert("tendras un descuento en tu compra de " +bono);
}
function finCompra(){
    total = totalCompra-bono;
    alert(`El total de su compra es de ${totalCompra}
    Aplicando el descuento del ${bono}, le quedara en ${total}`);
}
function vaciar(){
    window.location.reload()
}