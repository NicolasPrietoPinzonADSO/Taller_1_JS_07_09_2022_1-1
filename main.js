addEventListener("DOMContentLoaded", ()=>{
//     5. En el programa de cocina de “Doña Anita” han dado la receta para la preparación de bizcocho especial
// de chocolate. Por cada 100 gramos de harina hay que añadir 10 gramos de cacao y un puñado de
// nueces. Si quiero prepararlos con 20 gramos de chocolate. La cantidad de gramos de harina para
// hacer el bizcocho es
    
    let harinaBiz = 100
    let cacaoBiz = 10 
    let grCacao = Number(prompt(`Cuantos gramos de cacao`))
    let harinaTot = (harinaBiz*grCacao)/cacaoBiz
    console.log(`La cantidad de harina para hacer bizcocho con ${grCacao} gr de cacao es ${harinaTot}`);
})