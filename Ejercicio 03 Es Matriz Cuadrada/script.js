// esMatrizCuadrada(matriz)
// Crear una función esMatrizCuadrada que tome como argumento un array 2d
//  matriz y devuelva true si es una matriz cuadrada, es decir, si tiene 
//  igual cantidad de filas que de columnas, o false si no lo es.

// esMatrizCuadrada([
//   [4, 5],
//   [2, 7, 1],
//   [8, 10],
// ]) // false

// esMatrizCuadrada([
//   [4, 5, 9],
//   [2, 7, 1],
//   [8, 10, 5],
// ]) // true

const esMatrizCuadrada = (matriz) => {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            return matriz[j].length === matriz.length
        }
    }
}


console.log(esMatrizCuadrada([
    [4, 5, 4, 7, 8, 9],
    [2, 7, 1],
    [8, 10],
]));

console.log(esMatrizCuadrada([
    [4, 5, 9],
    [2, 7, 1],
    [8, 10, 5],
]));