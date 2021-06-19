// obtenerCantidad(item, items)
// Crear una función obtenerCantidad que tome como argumento un valor 
// cualquiera item y un array 2d items y devuelva la cantidad de veces 
// que item se encuentra dentro de items.

// obtenerCantidad('🍎', [
//   ['🍎', '🍏', '🍌', '🍌'],
//   ['🍌', '🍎'],
//   ['🍎', '🍏', '🍌'],
//   ['🍏', '🍌', '🍎', '🍌'],
// ]) // 4


const obtenerCantidad = (item, items) => {
    for (let i = 0; i < items.length; i++){
        let contador = []
        for (let j = 0; j < items[i].length; j++){
            if(items[i][j] === item){
                contador.push(item)
            }
        }
        return contador.length
    }
}


console.log(obtenerCantidad('🍎', [
    ['🍎', '🍏', '🍌', '🍌'],
    ['🍌', '🍎'],
    ['🍎', '🍏', '🍌'],
    ['🍏', '🍌', '🍎', '🍌'],
    ]))