
function llenarArreglo(){
    let alumnos=2;
    let cadena = "";
    let i=0;
    let arrEst=[i];
    let arrNota=[i];
    for( i = 0; i < alumnos; i++){

        let estudiantes= prompt("ingrese el nombre del estudiante");
        arrEst[i] = estudiantes

        let nota= prompt ("ingrese la nota del estudiante de 1.0 a 5.0");
        arrNota[i] = nota

        cadena = cadena + `${arrEst}------${arrNota}<br>`
    }
    document.getElementById("contenedor").innerHTML = cadena
    return alumnos, arrNota[i];
}
function nota_mas_alta(alumnos,arrNota){
    let var1=0;
    let cant=0;
    let estud="";
    for(let i=0;i<alumnos;i++){
        if(var1<=arrNota[i]){
            var1=arrNota[i];
            cant += cant;
            estud=estud+" - "+arrNota[i];
        }
    }
    alert(`${var1} e la nota mas alta y la obtuvieron ${cant} estudiantes`);
}

