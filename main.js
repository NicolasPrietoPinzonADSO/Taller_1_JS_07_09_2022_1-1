addEventListener("DOMContentLoaded", ()=>{
    // 4. Escribir un programa que calcule el área de un triángulo:
    // Base = 7 altura = 4 área del triángulo = (base * altura)/2
    let base = Number(prompt(`Ingrese la base`, 7));
    let altura = Number(prompt(`Ingrese la altura`, 4));
    let areaTri = (base * altura)/2
    console.log(`La formula para hallar el area de un triangulo: (${base} * ${altura}) / 2`)
    console.log(`El area del triangulo es: ${areaTri}`)
    })
