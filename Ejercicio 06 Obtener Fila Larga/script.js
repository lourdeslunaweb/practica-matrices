// obtenerFilaMasLarga(matriz)
// Crear una función obtenerFilaMasLarga que tome como argumento un array 2d matriz 
// y devuelva el array (fila) que tenga mayor longitud. Si hay varios de igual longitud,
// debe devolver el primero de ellos.

// obtenerFilaMasLarga([[1, 4], [3, 7, 5], [1]]) // [3, 7, 5]
// obtenerFilaMasLarga([[1], [3, 7], [6, 8]]) // [3, 7]

const obtenerFilaMasLarga = (matriz) =>{
    let filaLarga = []
    for (let i = 0; i < matriz.length ; i++){
        for (let j = 0; j < matriz[i].length; j++){
            if (matriz[i].length > filaLarga.length){
                filaLarga = matriz[i]
            } 
        }
    } 
    return filaLarga
}

console.log(obtenerFilaMasLarga([[1, 4], [3, 7, 5], [1]]));
console.log(obtenerFilaMasLarga([[1], [3, 7], [6, 8]]))
