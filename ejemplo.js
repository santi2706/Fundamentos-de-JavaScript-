//zona = "popayan"
/*sena = adso*/
console.log("sena");
console.log("comercio");
console.log("    * ");
console.log("   ## ");
console.log("  ####");
console.log(" ###### ");

//variables
var nombre = "juan David";
let casa = "ropa";
const PI = 3.1416;

let cajaDeFernando = "carro";
console.log(cajaDeFernando);

//errores de sintaxis
/*let 1nombre = "Ana";
let c="2562";
let caja de ana = "moto";
let cda = "Mani2"; */

//lo que si se puede 
let caja_de_fernando = "casa";
let cajaDeFernando01 = "moto";
let Idusuario = 12345;
let Id_usuario = 12345;

//intento de llamar
let nombredeusuario = "santiago";
let nombre_de_usuario = "santiago";
console.log(nombredeusuario);

//operadores
/*-*/ /*% ++ -- */
let suma = 8 + 2;
let resta = 10- 5;
let multiplicacion = 5 * 3;
let division = 412 / 21;
let modulo = 10 % 3;
let exponenciacion = 2 ** 3;
console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(modulo);
console.log(exponenciacion);

console.log(typeof 42); // Muestra: "number"
console.log(typeof "web"); // Muestra: "string"
console.log(typeof {}); // Muestra: "object"

let  nombre_persona = "Ana";//string
let fecha_reporte = new Date(2025-10-16);//date 
let pregunta = true;//boolean
let variable01 //undefined
let variable02 = null //valor nulo
let var03 = "256hgag";

//object
const aprendiz = {
    nombre: "Carlos",
    edad: 18,
    tipo_sede:"centro",
    saludar:function(){
    console.log("Hola, mi nombre es:"+ this.nombre);
    }
};
console.log(aprendiz.nombre);
aprendiz.saludar();

//equipo de futbol
const equipo = {
    nombre_equipo: "Barcelona",
    pais: "España",
    genero: "masculino",
    estadio: "Camp Nou",
    nombre: function(){
    console.log("El nombre del equipo es: " + this.nombre_equipo);
}
}
console.log(equipo.nombre_equipo);
equipo.nombre();
//arreglos 
let frutas = ["manzana", "banana", "cereza", "naranja"];
console.log(frutas);
console.log(frutas[2]);

let numeros = [10, 20, 30, 40, 50];//resultados 4
console.log(numeros);
console.log(numeros[4]);
let aprendices = ["Ana", "Luis", "Carlos", "Marta", "Sofía"];//resulatdos 3
console.log(aprendices);
console.log(aprendices[3]);

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

