// Validar los estudiantes que se inscriben al semillero y premiar con el pago de la inscripción bajo las siguientes condiciones:
// • los estudiantes deben vivir en Armenia
// • solo se pueden inscribir estudiantes de grado 10 o 11
// • el primer estudiante en registrarse en el semillero tiene derecho al formulario
// de inscripción de manera gratuita. (se le debe indicar al usuario)
// El programa debe indicar al usuario si pudo ser realizada la inscripción y si tiene
// algún beneficio, así mismo informar el costo que tendrá la inscripción, utilice el
// valor de $100.000 como tarifa plena a pagar.
let alumnos =10;
for(let i = 0; i < alumnos; i++){

    let grado=prompt("Ingresa el grado en que te encuentras");
    let ciudad= prompt("ingrese su ciudad de recidencia").toUpperCase();

    if  (i==0 && (grado==10 || grado==11)&& ciudad=="ARMENIA"){
        alert("usted es la primera persona en registrarse por lo que su inscripcion sera gratuita")
    }
    else if(i!=0 && (grado==10 || grado==11)&& ciudad=="ARMENIA"){
        alert("No tiene ningun descuento, el valor de la inscripcion es de $100.000")
    }
    else if (ciudad!="ARMENIA"){
        alert("usted no cumple con el requisito de vivir en aremnia, por lo tanto no puede inscribirse ")
    }
    else if(grado!=10||grado!=11){
        alert("usted no se puede registrar, debe estar en grado 10 o 11")
    }
}
