//Conversión Implícita
//Ejercicio 1: Concatenación automática
let a = "10" + 5;
alert(a);
alert(typeof a);
//Ejercicio 2: Operaciones aritméticas mixtas
let b1 = "20" - 5;
let c = "10" * "2";
let d = "50" / "5";
alert(b1);
alert(c);
alert(d);

//Ejercicio 3: Comparaciones
alert(5 == "5");    // true
alert(5 === "5");   // false
alert(false == 0);  // true
alert(false === 0); // false

//Ejercicio 4: De cadena a número
let x = "123";
let y = "45.6";
let z = "Hola";
alert(Number(x));      // 123
alert(parseInt(y));
alert(parseFloat(y));
alert(Number(z));      // NaN

//Ejercicio 5: De número a cadena
let num = 250;
alert(String(num));     // "250"
alert(num.toString());  // "250"
