// Fundamentos de JavaScript – Taller completo

// Ejercicio 1: Variables y operaciones básicas
// Declaro dos variables numéricas y aplico operaciones matemáticas para entender cómo funciona cada operador.
let a = 10;
let b = 3;

console.log("Suma:", a + b);               // Suma de 10 + 3 = 13
console.log("Resta:", a - b);              // Resta de 10 - 3 = 7
console.log("Multiplicación:", a * b);     // Multiplicación 10 * 3 = 30
console.log("División:", a / b);           // División 10 / 3 = 3.333...
console.log("Residuo (módulo):", a % b);   // Módulo 10 % 3 = 1 (lo que sobra)
console.log("Potencia:", a ** b);          // Potencia 10 elevado a 3 = 1000

// Ejercicio 2: Tipos de datos
// Uso typeof para verificar el tipo de dato de cada variable. Esto me ayuda a identificar si es texto, número o booleano.
const nombre = "Laura";     // Cadena de texto
const edad = 25;            // Número entero
const activo = true;        // Valor booleano (verdadero o falso)

console.log("Tipo de nombre:", typeof nombre); // Resultado: string
console.log("Tipo de edad:", typeof edad);     // Resultado: number
console.log("Tipo de activo:", typeof activo); // Resultado: boolean

// Ejercicio 3: Arreglos
// Creo un arreglo con frutas, le agrego una más y luego muestro el contenido completo y la cantidad total.
const frutas = ["Manzana", "Banano", "Pera"];
frutas.push("Fresa"); // Agrego una fruta nueva al final del arreglo

console.log("Lista de frutas:", frutas);             // Muestra todas las frutas
console.log("Cantidad de frutas:", frutas.length);   // Muestra cuántas frutas hay

// Accedo a cada fruta por su posición en el arreglo para mostrarla individualmente
console.log("Fruta 1:", frutas[0]); // Primera fruta: Manzana
console.log("Fruta 2:", frutas[1]); // Segunda fruta: Banano
console.log("Fruta 3:", frutas[2]); // Tercera fruta: Pera
console.log("Fruta 4:", frutas[3]); // Cuarta fruta: Fresa

// Ejercicio 4: Función básica
// Creo una función que recibe dos números, los multiplica y devuelve el resultado. Luego la llamo con valores de ejemplo.
function multiplicar(x, y) {
  return x * y;
}

console.log("Resultado de la multiplicación:", multiplicar(4, 5)); // Resultado: 20



// Reto 2: Promedio de notas
let notas = [4.5, 3.8, 5.0, 4.0, 3.6];

function calcularPromedio(arrayNotas) {
  let suma = 0;
  for (let i = 0; i < arrayNotas.length; i++) {
    suma += arrayNotas[i];
  }
  let promedio = suma / arrayNotas.length;
  return promedio.toFixed(2);
}

let resultadofinal = calcularPromedio(notas);
console.log("Las notas son:", notas.join(", "));
console.log("El promedio es:", resultadofinal);


// Reto 3: Gestor de estudiantes
const estudiante = {
  nombre: "Santiago Velasco",
  edad: 18,
  materias: ["Matemáticas", "Programación", "Inglés", "Ética"],

  mostrarInfo: function () {
    console.log("Información del estudiante:");
    console.log("Nombre:", this.nombre);
    console.log("Edad:", this.edad + " años");
    console.log("Materias:", this.materias.join(", "));
  }
};

estudiante.mostrarInfo();


// Reto 4: Mayor y menor número
function encontrarMayorYMenor(numeros) {
  let mayor = Math.max(...numeros);
  let menor = Math.min(...numeros);

  return {
    mayor: mayor,
    menor: menor
  };
}

let listaNumeros = [12, 5, 27, 3, 18];
let resultadoNumeros = encontrarMayorYMenor(listaNumeros);

console.log("Números:", listaNumeros);
console.log("El número mayor es:", resultadoNumeros.mayor);
console.log("El número menor es:", resultadoNumeros.menor);









