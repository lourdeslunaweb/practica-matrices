// obtenerNumeroMayor(matriz)
// Crear una función obtenerNumeroMayor que tome como argumento un array 2d de 
// números matriz y devuelva el mayor número de dicha matriz.

// obtenerNumeroMayor([
//   [2, 7, 12, 1],
//   [8, 23],
//   [9, 45, 7],
//   [22, 3, 24, 4],
// ]) // 45



const obtenerNumeroMayor = (matriz) => {
    let mayor = 0;
    for (let i=0; i < matriz.length; i++) {
        for (let j=0; j < matriz[i].length; j++) {
            if (matriz[i][j] > mayor){
                mayor = matriz[i][j]
            }
        }
    }
    return mayor
}


console.log(obtenerNumeroMayor([
    [2, 7, 12, 1],
    [8, 23],
    [9, 45, 7],
    [22, 3, 24, 4],
]));