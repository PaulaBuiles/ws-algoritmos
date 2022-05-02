
let=cont=0;
let==notaMasalta;
let=estud;
function llenarArreglo(){
    let alumnos=2;
    for(let i = 0; i < alumnos; i++){

        let estudiantes= prompt("ingrese el nombre del estudiante");
        let nota= prompt ("ingrese la nota del estudiante de 1.0 a 5.0");

        let arr=[estudiantes,nota]
        console.log(arr.length);
        for(let estud1 of arreglo){
            console.log (estud1);
            if(nota==5.0){
                
                cont += nota;
                notaMasalta=nota;
                alert("la nota mas alta es "+notaMasalta+" los estudiantes con esta nota son ") 
            }  
        }
    }
}
