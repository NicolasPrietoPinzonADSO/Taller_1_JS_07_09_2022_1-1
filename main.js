addEventListener("DOMContentLoaded", ()=>{
    // 7. tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año. Martin toma
    // 2/3 del total. Jairo un cuarto del total, y Lorena se queda con el resto. ¿qué parte le corresponde a
    // Lorena?    
   let martin = fraction(2/3)
   let jairo = (1/4)
   let suma = (martin+jairo)
   let lorena = (1/1)-suma
   console.log(`Jairo y martin tienen un total de ${suma}`);
   console.log(`A lorena le corresponde un total de ${lorena}`);

})