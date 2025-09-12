// let a = ;
// let b = 2;

// console.log(a + b); //suma
// console.log(a - b); //resta
// console.log(a * b); //multiplicacion
// console.log(a / b); //division
// console.log(a % b); //modulo

// let c = a++; //incremento
// let d = b--; //decremento
// let e = a ** b; //exponente
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(a, b, c, d, e);
// operadores de asignacion

// 1. Concatena dos cadenas de texto.
// let nombre = "jose"

// console.log("hola " + nombre +" rivera")

// 2. Muestra la longitud de una cadena de texto.

// console.log(nombre.length)

// 3. Muestra el primer y Ãºltimo carÃ¡cter de un string.

// console.log(nombre[0])
// console.log(nombre[nombre.length - 1])

// 4. Convierte a mayÃºsculas y minÃºsculas un string.

// console.log(nombre.toUpperCase())

// 5. Crea una cadena de texto en varias lÃ­neas.

// console.log(`hola ${nombre}
// como estas?`)

// 6. Interpola el valor de una variable en un string.

// console.log("hola " +nombre + " Rivera")

// 7. Reemplaza todos los espacios en blanco de un string por guiones.

// console.log((" Hola "+ nombre+ " Rivera").replaceAll(" ", "*"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta.

// console.log(nombre.includes("jose"))

// 9. Comprueba si dos strings son iguales.
//  let string1 = "hola"
//  let string2 = "hola"

//  console.log(string1 ===string2)

// 10. Comprueba si dos strings tienen la misma longitud.
//  console.log(string1.length ===string2.length)

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor.
// let nombre = "jose";
// if (nombre === "jose") {
//   console.log(nombre);
// }
// 2. Imprime por consola un mensaje si el usuario y contraseÃ±a concide con unos establecidos.
// let usuario = "jose";
// let password = 12324;

// if (usuario === "jose" && password === 1234) {
//   console.log("usuario y contraseña correcta");
// } else {
//   console.log("usuario y contraseña incorrecta");
// }

// 3. Verifica si un nÃºmero es positivo, negativo o cero e imprime un mensaje.

// let numero = -1;

// if (numero < 0) {
//   console.log("El número es negativo");
// } else if (numero === 0) {
//   console.log("El número es cero");
// } else {
//   console.log("El número es positivo");
// }

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuÃ¡ntos aÃ±os le faltan.

// switch (true) {
//   case edad < 18:
//     console.log(`No puedes votar, te faltan ${18 - edad} años`);
//     break;
//   case edad === 18:
//     console.log("Puedes votar por primera vez");
//     break;
//   default:
//     console.log("Puedes votar");
//     break;
// }

// let edad = 17;

// switch (true) {
//   case edad < 18:
//     console.log(
//       `La edad es ${edad}, no puede votar. Le faltan ${18 - edad}años`
//     );
//     break;
//   case edad === 18:
//     console.log(`La edad es ${edad}, puedes votar por primera vez`);
//     break;
//   default:
//     console.log(`La edad es ${edad}, puede votar`);
// }

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad .

// let edad = 18;
// let tipo = edad >= 18 ? "adulto" : "menor";
// console.log(tipo);

// 6. Muestra en que estaciÃ³n del aÃ±o nos encontramos dependiendo del valor de una variable "mes".

// let mes = 1;

// switch (true) {
//   case mes === 12 || mes === 1 || mes === 2:
//     console.log("estamos en verano");
//     break;
//   case mes >= 3 && mes <= 5:
//     console.log("estamos en otoño");
//     break;
//   case mes >= 6 && mes <= 8:
//     console.log("estamos en invierno");
//     break;
//   case mes >= 9 && mes <= 11:
//     console.log("estamos en primavera");
//   default:
// }
// 7. Muestra el nÃºmero de dÃ­as que tiene un mes dependiendo de la variable del ejercicio anterior.

// switch (true) {
//   case mes === 2:
//     console.log("el mes tiene 28 días");
//     break;
//   case mes === 4 || mes === 6 || mes === 9 || mes === 11:
//     console.log("el mes tiene 30 días");
//     break;
//   case mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12:
//     console.log("el mes tiene 31 días");
//     break;
//   default:
//     console.log("mes incorrecto");
//     break;
// }

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.

// switch (idioma) {
//     case "es":
//         console.log("hola");
//         break;
//     case "en":
//         console.log("hello");
//         break;
//     case "fr":
//         console.log("bonjour");
//         break;
//     case "it":
//         console.log("ciao");
//         break;
//     case "pt":
//         console.log("ola");
//         break;
//     default:
//         console.log("Idioma no soportado");
//         break;
// }

// let idioma = "it"

// 	switch (idioma){
// 	case "es" :
// 	console.log("Hola")
// 	break
// 		case "fr" :
// 	console.log("Bonjour")
// 	break
// 		case"it":
// 	console.log("ciao")
// 	break
// 		case "eng" :
// 	console.log("Bye")
// 	break
//     default:
// 	console.log("Idioma invalido")
//     }
// 9. Usa un switch para hacer de nuevo el ejercicio 6.

// 10. Usa un switch para hacer de nuevo el ejercicio 7.

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios.

// 1. Crea un bucle que imprima los nÃºmeros del 1 al 20.
//  for (let i = 1; i <= 20; i++) {
//     console.log(i);
//  }

// // 2. Crea un bucle que sume todos los nÃºmeros del 1 al 100 y muestre el resultado.

//     let suma = 0;
//     for (let i = 1; i <= 100; i++) {
//         suma += i;
//     }
//     console.log("La suma de los números del 1 al 100 es: " + suma);

// 3. Crea un bucle que imprima todos los nÃºmeros pares entre 1 y 50.

// // // // // // // // // / 0/ // for (let i = 1; i <= 50; i++)// // for (let i = 1; i <= 50; i++) {
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola.

// let nombres = ["jose", "maria", "pedro", "ana"];
// for (let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i]);

// }
// let nombres = ["Jose", "Luis", "Rivera", "Melendez"];

// // for (let i = 0; i < nombres.length; i++) {
// //   console.log(nombres[i]);
// // }

// for (let nombre of nombres) {
//   console.log(nombre);
// }
// 5. Escribe un bucle que cuente el nÃºmero de vocales en una cadena de texto.

// 6. Dado un array de nÃºmeros, usa un bucle para multiplicar todos los nÃºmeros y mostrar el producto.

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5.

// 8. Usa un bucle para invertir una cadena de texto.

// 9. Usa un bucle para generar los primeros 10 nÃºmeros de la secuencia de Fibonacci.

// 10. Dado un array de nÃºmeros, usa un bucle para crear un nuevo array que contenga solo los nÃºmeros mayores a 10.

// let a = 20;
// let b = 20;

// if (a > b) {
//   console.log(`${a} es mayor que ${b}`);
// } else if (a < b) {
//   console.log(`${a} es menor que ${b}`);
// } else {
//   console.log(`${a} es igual a ${b}`);
// }

// let edad = 17;

// let mensaje =
//   edad < 18
//     ? "No puede votar"
//     : edad === 18
//     ? "puede votar por primera vez"
//     : " Puede votar";

// console.log(mensaje);
// let dia = 1

// switch (true) {
// case dia === 1:
// console.log("Es Lunes")
// break
// case dia === 2:
// console.log("Es Martes")
// break
// case dia === 3:
// console.log("Es Miercoles")
// break
// case dia === 4:
// console.log("Es Jueves")
// break
// case dia === 5:
// console.log("Es Viernes")
// break
// case dia === 6:
// console.log("Es Sabado")
// break
// case dia === 7:
// console.log("Es Domingo")
// break
// default:
// console.log("Dia invalido")
// }

// let dia = 1

// switch (dia) {
// case 1:
// console.log("Es Lunes")
// break
// case 2:
// console.log("Es Martes")
// break
// case 3:
// console.log("Es Miercoles")
// break
// case 4:
// console.log("Es Jueves")
// break
// case 5:
// console.log("Es Viernes")
// break
// case 6:
// console.log("Es Sabado")
// break
// case 7:
// console.log("Es Domingo")
// break
// default:
// console.log("Dia invalido")
// }

//Crea un array con 5 nombres y muéstralos uno por uno en consola.

// let nombres = ["Jose", "Luis", "Rivera", "Melendez"];

// for (let nombre of nombres) {
//   console.log(nombre);
// }

// let nombres = ["Jose", "Luis", "Rivera", "Melendez"];

// for (let i = 0; i < nombres.length; i++) {
//   console.log(nombres[i]);

//   nombres.push("Marta" );
// }

// let cosas = ["cosa1", "cosa2", "cosa3", "cosa4", "cosa5"];

// cosas.push("cosa6");
// cosas.unshift("cosa0");
// cosas.pop();
// cosas.shift();
// cosas.splice(3,1, "nuevaCosa");
// console.log(cosas);

// let nombres = ["Jose", "Luis", "Rivera", "Melendez"];

// for (let nombre of nombres) {
//   if (nombre.length <= 4) {
//     console.log(nombre);
//   }
// }

// let nombres = ["Jose", "Luis", "Rivera", "Melendez"];

// let largos = nombres.filter(nombre => nombre.length > 4);
// console.log(largos); // ["Rivera", "Melendez"]

// let miSet = new Set([1, 2, 2, 3, 4, 5, 6]);

// console.log(miSet);
// console.log(miSet.size);
// console.log(miSet.has(1));
// console.log(miSet.delete(1));
// console.log(miSet.has(1));

// let saludos = new Map ([["Eng","Hello"],["Spa","Hola"],["It","Ciao"]])

// console.log(saludos)
// console.log(saludos.get("Spa"))
// saludos.set("Fra","Bonjour")
// console.log(saludos)
// saludos.delete("Eng")
// console.log(saludos)
// console.log(saludos.size)

// for (let [clave,valor] of saludos){
//     console.log(`${clave} => ${valor}`)
// }

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una funciÃ³n que reciba dos nÃºmeros y devuelva su suma.

// function Sum(a, b) {
//   console.log(a + b);
// }
// Sum(17, 10);

// 2. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva el mayor de ellos.

// function encontrarMayor(myArray) {
//   let mayor = myArray[0];

//   for (let i = 1; i < myArray.length; i++) {
//     if (myArray[i] > mayor) {
//       mayor = myArray[i];
//     }
//   }
//   console.log("El número mayor es: " + mayor);
//   return mayor;
// }

// encontrarMayor([5, 10, 15, 20, 25, -20, 3, 6]);

// 3. Crea una funciÃ³n que reciba un string y devuelva el nÃºmero de vocales que contiene.

// function contarVocales(cadena) {
//   let contador = 0;
//   let vocales = "aeiouAEIOU";
//     for (let i = 0; i < cadena.length; i++) {
//         if (vocales.includes(cadena[i])) {
//             contador++;
//         }
//     }
//     console.log("El número de vocales es: " + contador);
//     return contador;
// }
// contarVocales("Hola Mundo");

// function contarVocales(texto) {
//   let vocales = "aeiouAEIOU";
//   let contador = 0;

//   for (let i = 0; i < texto.length; i++) {
//     if (vocales.includes(texto[i])) {
//       contador++;
//     }
//   }
//   return contador;
// }

// console.log(contarVocales("aA"));

// 4. Crea una funciÃ³n que reciba un array de strings y devuelva un nuevo array con las strings en mayÃºsculas.

// function convertirAMayusculas(arr) {
//   let resultado = [];
//   for (let i = 0; i < arr.length; i++) {
//     resultado.push(arr[i].toUpperCase());
//   }
//   return resultado;
// }

// function transformaMayus(texto) {
//   let resultado = [];

//   for (let i = 0; i < texto.length; i++) {
//     resultado.push(texto[i].toUpperCase());
//   }
//   return resultado;
// }
// console.log(transformaMayus(["hola", "mundo", "javascript"]));

// 5. Crea una funciÃ³n que reciba un nÃºmero y devuelva true si es primo, y false en caso contrario.

// function esPrimo(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// console.log(esPrimo(11)); // true
// console.log(esPrimo(4)); // false

// 6. Crea una funciÃ³n que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.

// function elementosComunes(arr1, arr2) {
//   let comunes = [];
//   for (let i = 0; i < arr1.length; i++) {   
//     if (arr2.includes(arr1[i]) && !comunes.includes(arr1[i])) {
//       comunes.push(arr1[i]);
//     }
//   }
//   return comunes;
// }
// console.log(elementosComunes([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]

// 7. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva la suma de todos los nÃºmeros pares.

// function sumaPares(arr) {
//   let suma = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       suma += arr[i];
//     }
//   }
//   return suma;
// }
// console.log(sumaPares([1, 2, 3, 4, 5, 6])); // 12    

// 8. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva un nuevo array con cada nÃºmero elevado al cuadrado.

// function elevarAlCuadrado(arr) {
//   let resultado = [];
//   for (let i = 0; i < arr.length; i++) {
//     resultado.push(arr[i] ** 2);
//   }
//   return resultado;
// }
// console.log(elevarAlCuadrado([1, 2, 3, 4])); // [1, 4, 9, 16]

// 9. Crea una funciÃ³n que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.

// function invertirPalabras(cadena) {
//   let palabras = cadena.split(" ");
//   let invertidas = palabras.reverse();
//   return invertidas.join(" ");
// }
// console.log(invertirPalabras("Hola mundo desde JavaScript")); // "JavaScript desde mundo Hola"


// 10. Crea una funciÃ³n que calcule el factorial de un nÃºmero dado.


// function factorial(num) {
//   if (num < 0) return undefined;   
//     if (num === 0) return 1;
//     let resultado = 1;
//     for (let i = 1; i <= num; i++) {
//         resultado *= i;
//     }  
//     return resultado;
// }
// console.log(factorial(5)); // 120
// console.log(factorial(0)); // 1
// console.log(factorial(-3)); // undefined    
// console.log(factorial(3)); // 6
// console.log(factorial(4)); // 24


// 1. Crea un objeto con 3 propiedades.

// let auto = {
//     marca: "Toyota",
//     modelo: "Corolla",
//     anio: 2020
// };



// 2. Accede y muestra su valor.

// console.log(auto.marca);
// console.log(auto["modelo"]);


// 3. Agrega una nueva propiedad.

// auto.color = "Rojo";
// console.log(auto);   

// 4. Elimina una de las 3 primeras propiedades.

// delete auto.anio;
// console.log(auto);

// 5. Agrega una funciÃ³n e invÃ³cala.

// auto.detalle = function() {
//     return `Auto: ${this.marca} ${this.modelo} de color ${this.color}`;
// };
// console.log(auto.detalle());

// 6. Itera las propiedades del objeto.

// for (let clave in auto) {
//     console.log(`${clave}: ${auto[clave]}`);
// }


// 7. Crea un objeto anidado.
// let persona = {
//     nombre: "Juan",
//     edad: 30,
//     direccion: {
//         calle: "Calle Falsa 123",
//         ciudad: "Springfield",
//         pais: "USA"
//     }
// };  
// let persona2 = {
//     nombre: "Juan",
//     edad: 30,
//     direccion: {
//         calle: "Calle Falsa 123",
//         ciudad: "Springfield",
//         pais: "USA"
//     }
// };


// 8. Accede y muestra el valor de las propiedades anidadas.

// console.log(persona.direccion.calle);
// console.log(persona["direccion"]["ciudad"]);


// 9. Comprueba si los dos objetos creados son iguales.
// console.log(JSON.stringify(persona) === JSON.stringify(persona2)); 


// 10. Comprueba si dos propiedades diferentes son iguales

// console.log(persona.edad === persona.edad2); // true