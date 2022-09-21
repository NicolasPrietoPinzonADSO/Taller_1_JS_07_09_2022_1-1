addEventListener("DOMContentLoaded", () => {
//     10. Ingrese una frase que lo identifique como programador de Software y luego mostar esta frase
// invertida.
    let frase = prompt('Ingrese la frase a invertir')
    console.log(frase);
    let invertirFrase = frase.split("").reverse().join("");
    console.log(invertirFrase);
})

