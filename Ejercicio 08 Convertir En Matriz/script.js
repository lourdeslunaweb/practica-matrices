// convertirEnMatriz(columnas, array)
// Crear una función convertirEnMatriz que tome como argumentos un número entero 
// columnas y un array array y devuelva una matriz con los items de array y la 
// cantidad de columnas columnas por fila. La última fila puede quedarse como menos
// columnas de las indicadas si no hay más ítems que agregar.

// convertirEnMatriz(2, [1, 2, 3, 4]) // [[1, 2], [3, 4]]
// convertirEnMatriz(3, [1, 2, 3, 4, 5, 6, 7]) // [[1, 2, 3], [4, 5, 6], [7]]
// convertirEnMatriz(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) // [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11]]

const convertirEnMatriz = (columnas, array) =>{
    let matrizNueva = []
    for (let i = 0; i < columnas; i++) {
        let fila = []
        for (let j = 0; j < columnas; j++) {
            
            fila.push(array[j])
        }
        matrizNueva.push(fila)
    }
    return matrizNueva
}



console.log(convertirEnMatriz(2, [1, 2, 3, 4])) 
console.log(convertirEnMatriz(3, [1, 2, 3, 4, 5, 6, 7])) 
console.log(convertirEnMatriz(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])) 