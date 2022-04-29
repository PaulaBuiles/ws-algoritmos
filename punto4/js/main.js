let compraTotal = 0;
let bono = 0;

function addH(){
    let listaSinOrden = document.createElement("ul");
    document.body.appendChild(listaSinOrden);

    let elemento1Lista = document.createElement("li");
    let cant = parseFloat(document.getElementsByName("cantH")[0].value);
    elemento1Lista.textContent = cant;
    listaSinOrden.appendChild(elemento1Lista);

    let precio = 15000;
    let compra = cant * precio;

    compraTotal = compraTotal + compra;

    let elemento2Lista = document.createElement("li");
    elemento2Lista.textContent = compra;
    listaSinOrden.appendChild(elemento2Lista);
}

function addL(){
    let listaSinOrden = document.createElement("ul");
    document.body.appendChild(listaSinOrden);

    let elemento1Lista = document.createElement("li");
    let cant = parseFloat(document.getElementsByName("cantL")[0].value);
    elemento1Lista.textContent = cant;
    listaSinOrden.appendChild(elemento1Lista);

    let precio = 3500;
    console.log(precio)
    let compra = cant * precio;

    compraTotal = compraTotal + compra;

    console.log(compra);

    let elemento2Lista = document.createElement("li");
    elemento2Lista.textContent = compra;
    listaSinOrden.appendChild(elemento2Lista);
}

function addP(){
    let listaSinOrden = document.createElement("ul");
    document.body.appendChild(listaSinOrden);

    let elemento1Lista = document.createElement("li");
    let cant = parseFloat(document.getElementsByName("cantP")[0].value);
    elemento1Lista.textContent = cant;
    listaSinOrden.appendChild(elemento1Lista);

    let precio = 2000;
    console.log(precio)
    let compra = cant * precio;

    compraTotal = compraTotal + compra;

    console.log(compra);

    let elemento2Lista = document.createElement("li");
    elemento2Lista.textContent = compra;
    listaSinOrden.appendChild(elemento2Lista);
}

function addF(){
    let listaSinOrden = document.createElement("ul");
    document.body.appendChild(listaSinOrden);

    let elemento1Lista = document.createElement("li");
    let cant = parseFloat(document.getElementsByName("cantF")[0].value);
    elemento1Lista.textContent = cant;
    listaSinOrden.appendChild(elemento1Lista);

    let precio = 5000;
    let compra = cant * precio;

    compraTotal = compraTotal + compra;

    let elemento2Lista = document.createElement("li");
    elemento2Lista.textContent = compra;
    listaSinOrden.appendChild(elemento2Lista);
}

function generarBono(){
    bono=Math.round(Math.random() * 60000)
}

function pagar(){
    if (compraTotal >= 45000) {
        generarBono();
        compraDes = compraTotal - bono;
        alert("Te hemos obsequiado un BONO REGALO de: $" + bono + "\n" +
              "El valor de su compra sin descuento es: $" + compraTotal + "\n" +
              "El valor de su compra con descuento es: $" + compraDes + "\n" +
              "GRACIAS POR SU COMPRA, VUELVA PRONTO");
    } else {
        alert("NO hemos generado BONO ya que su compra no supero los 45.000" + "\n" +
              "El valor de su compra es: $" + compraTotal + "\n" +
              "GRACIAS POR SU COMPRA, VUELVA PRONTO");
    }
}

function reload(){
    window.location.reload();
}
