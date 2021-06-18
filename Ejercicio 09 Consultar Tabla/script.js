// consultarTabla(id, columna, tabla)
// Crear una función consultarTabla que tome como argumento un número id, un string 
// columna, y una matriz tabla. La matríz debe tener un estructura de tabla, donde 
// el primer array contiene el nombre de las columnas, y los siguientes array son las 
// filas donde se ingresan los registros con sus datos en el orden de las columnas. 
// Por ejemplo, si el índice 1 es la columna nombre todas las demás "filas" deben 
// tener el dato nombre en esa posición. La tabla tiene que tener una columna id, que 
// es un identificador único para cada registro (un número incremental). La función debe
//  retornar el valor del dato de la columna buscada, para el registro con el id 
//  indicado, en la tabla que se le pasa como parámetro.

// const tabla = [
//   ['id', 'nombre', 'edad', 'email'],
//   [1, 'Ada', 33, 'ada@gmail.com'],
//   [2, 'Grace', 45, 'grace@gmail.com'],
// ]

// consultarTabla(2, 'nombre', tabla) // 'Grace'
// consultarTabla(1, 'email', tabla) // 'ada@gmail.com'