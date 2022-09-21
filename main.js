addEventListener("DOMContentLoaded", () => {
    //9. Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo,
    //pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron. Realice el código
    //que representen el algoritmo para solucionar este problema.
    //Al final debe entregar el nombre de la persona entrevistada en mayúscula sostenida y minunscula
    //sostenida y la edad del entrevistado.
    let obj = {}, edad;
    do{
        edad = Number(prompt("Ingrese su año de nacimiento"));
        obj[prompt("Ingrese su nombre")] = 2022 - edad;
    }
    while (confirm("Desea insertar a otra persona?"))
    console.log(obj);

})

