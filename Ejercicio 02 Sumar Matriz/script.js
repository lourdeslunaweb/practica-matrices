// sumar(matriz)
// Crear una función sumar que tome como argumento un array 2d de números matriz y devuelva la suma de todos los número de dicha matriz.

// sumar([
//   [4, 5],
//   [2, 7, 1],
//   [8, 10],
// ]) // 37

const sumar = (matriz) => {
    let resultado = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j=0; j < matriz[i].length; j++) {
            resultado += matriz[i][j]
        }
    }
    return resultado
}

console.log(sumar([
    [4, 5],
    [2, 7, 1],
    [8, 10],
]));