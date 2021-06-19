// generarGrilla(filas, columnas, items)
// Crear una función generarGrilla que tome como argumentos un número entero filas, 
// un número entero columnas y un array de valores items, y devuelva una matriz de 
// filas filas y columnas columnas, donde cada ítem de la matriz es un ítem aleatorio 
// de items.

// generarGrilla(2, 3, [1, 2]) /* 
//   [
//     [1, 1, 2], 
//     [2, 1, 1]
//   ]
// */

// generarGrilla(3, 3, ['a', 'b', 'c']) /* 
//   [
//     ['c', 'c', 'a'], 
//     ['c', 'a', 'a'], 
//     ['b', 'a', 'b']
//   ]
// */

const generarGrilla = (filas, columnas, items) => {
    let grilla = []
    for (let i = 0; i < filas; i++) {
        let fila = []
        for (let j = 0; j < columnas; j++) {
            fila.push(items[Math.floor(Math.random() * items.length)])
        }
        grilla.push(fila)
    }
    return grilla
}

console.log(generarGrilla(2, 3, [1, 2]));


console.log(generarGrilla(3, 3, ['a', 'b', 'c']));
