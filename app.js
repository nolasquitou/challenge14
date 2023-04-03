// Ejercicio 1 : A través de document.write concatena un saludo almacenado en 2 variables.

let saludo1 = "Hola "
let saludo2 = "Buenas"
document.write(saludo1 + saludo2 + "<br>")

// Ejercicio 2 : Pedirle el nombre al usuario y devolver un msj con saludo en el HTML.

let nombre = prompt("ingrese su nombre")
document.write(`${saludo1 + nombre}` + "<br>")

// Ejercicio 3 : (Introducir un número y devolver el doble del mismo num).

let numero = parseInt(prompt("Introducir un numero"))
document.write(`el doble del numero ${numero} es ${numero*2}` + "<br>")

// Ejercicio 4 : Recibir el apellido del usuario, y mostrar por consola la ultima letra.

let apellido = prompt("introducir Apellido")
document.write(`La ultima letra del ${apellido} es ${apellido.slice(-1)} `)