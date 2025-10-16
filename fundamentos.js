//Fundamentos de JavaScript
// Ejercicio 1: Variables y operaciones básicas
let a = 10;
let b = 3;

console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);
console.log("Módulo:", a % b);


// Ejercicio 2: Tipos de datos
const nombre = "Laura";
const edad = 25;
const activo = true;

console.log(typeof nombre); // string
console.log(typeof edad);   // number
console.log(typeof activo); // boolean


//Arreglos

const frutas01 = ["Manzana", "Banano", "Pera"];
frutas.push("Fresa");
console.log(frutas);
console.log("Cantidad:", frutas.length);


//Función básica
function multiplicar(x, y) {
  return x * y;
}
console.log("Resultado de la multiplicación:", multiplicar(4, 5));

//3. Retos de pensamiento
  // Pide dos números y una operación al usuario, luego muestra el resultado
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
  let operacion = prompt("Ingrese la operación (+, -, *, /):");
    let resulados;

    switch (operacion) {
    case "+":
    resultado = num1 + num2;
    reak;
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
    alert("El resultado es: " + resultado)



    //Reto 2: Promedio de notas

    let notas = [4.5, 3.8, 5.0, 4.0, 3.6];
    function calcularPromedio(arrayNotas) {
    let suma = 0;
    for (let i = 0; i < arrayNotas.length; i++) {
        suma += arrayNotas[i];
    }
    let promedio = suma / arrayNotas.length;
      return promedio.toFixed(2); // Redondea a 2 decimales
    }
    // Llamar a la función y mostrar la solucion
    let resultadofinal = calcularPromedio(notas);
    console.log("Las notas son: " + notas.join(", "));
    console.log("El promedio es: " + resultadofinal);

    //Reto 3: Gestor de estudiantes
    // Objeto estudiante
const estudiante = {
    nombre: "Santiago Velasco",
    edad: 18,
    materias: ["Matemáticas", "Programación", "Inglés", "Ética"],

  // Método para mostrar información del estudiante
    mostrarInfo: function() {
    console.log("Información del estudiante:");
    console.log("Nombre: " + this.nombre);
    console.log("Edad: " + this.edad + " años");
    console.log("Materias: " + this.materias.join(", "));
    }
};
// Llamar el método para mostrar la información
estudiante.mostrarInfo();

//Reto 4 (opcional):
// Función para encontrar el número mayor y menor
function encontrarMayorYMenor(numeros) {
    let mayor = Math.max(...numeros);
    let menor = Math.min(...numeros);

    return {
    mayor: mayor,
    menor: menor
    };
}

// Ejemplo de uso
let listaNumeros = [12, 5, 27, 3, 18];
let resultado = encontrarMayorYMenor(listaNumeros);

console.log("Números:", listaNumeros);
console.log("El número mayor es:", resultado.mayor);
console.log("El número menor es:", resultado.menor);

