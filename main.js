addEventListener("DOMContentLoaded", ()=>{
    //     8. Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura. Considere que
    // se cobra por m2 y realice el código que representen el algoritmo que le permita ir generando
    // presupuestos para cada cliente.  
       let m2 = Number(prompt(`Ingrese el espacio a pintar en m2`))
       let precio = Number(prompt(`Ingrese el precio de m2`))
       let total = m2*precio
       console.log(`El total del costo del trabajo es de: ${total} COP`);
    
    })

