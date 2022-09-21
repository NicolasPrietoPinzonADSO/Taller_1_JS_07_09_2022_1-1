addEventListener("DOMContentLoaded", ()=>{
    // 4. Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada uno por
    // $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000. Después de pagar le
    // sobran $91000. ¿cuánto dinero tenía?
    
    let hex = 11500
    let bomba = 1168000
    let caja = 87000
    let sobrante = 91000
    let v_hex = hex*5
    let v_caja = caja*3
    let total = sobrante+v_caja+v_hex+bomba
    console.log(`el total de dinero que tenia es de:  ${total}`);
})