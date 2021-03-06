// generarMatrizEscalonada(filas)
// Crear una función generarMatrizEscalonada que tome como argumento un número 
// entero filas y devuelva un array 2d con la cantidad de filas filas, donde 
// la primera fila tiene 1 columna, la segunda tiene 2, la tercera 3, 
// y así sucesivamente. Los ítems de la matriz deben ser 0.

// generarMatrizEscalonada(3) /* 
//   [
//     [0], 
//     [0, 0], 
//     [0, 0, 0]
//   ] */
// generarMatrizEscalonada(5) /* 
//   [
//     [0], 
//     [0, 0], 
//     [0, 0, 0], 
//     [0, 0, 0, 0], 
//     [0, 0, 0, 0, 0]
//   ] */

const generarMatrizEscalonada = (filas) =>{
    let matrizEscalonada = []
    for (let i = 0; i < filas; i++) {
        let fila = []
        for (let j = 0; j < i+1; j++) {
            fila.push(0)
        }
        matrizEscalonada.push(fila)
    }
    return matrizEscalonada
}

console.log(generarMatrizEscalonada(3));
console.log(generarMatrizEscalonada(5));