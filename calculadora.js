// Reto 1: Calculadora básica
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let operacion = prompt("Ingrese la operación (+, -, *, /):");
let resultado;

switch (operacion) {
    case "+":
    resultado = num1 + num2;
    break;
    case "-":
    resultado = num1 - num2;
    break;
    case "*":
    resultado = num1 * num2;
    break;
    case "/":
    if (num2 !== 0) {
    resultado = num1 / num2;
    } else {
    resultado = "Error: División por cero";
    }
    break;
    default:
    resultado = "Operación no válida";
}

alert("El resultado es: " + resultado);

// Reto 5: Ingreso de datos
let nombre_persona = prompt("Ingresa tu nombre:");
let edad_persona = prompt("Ingresa tu edad:");
let telefono = prompt("Ingresa tu número de teléfono:");
let peso = prompt("Ingresa tu peso en kg:");

console.log("Resumen de datos ingresados:");
console.log("Nombre: " + nombre_persona);
console.log("Edad: " + edad_persona + " años");
console.log("Teléfono: " + telefono);
console.log("Peso: " + peso + " kg");

