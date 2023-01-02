
// CONCAT cumple la funcion de JUNTAR dos o mas cadenas y retorna una NUEVA.

let cadena = "cadena de prueba";
let cadena2 = " cadena"

resultado = cadena.concat(cadena2);
document.write(resultado);

//------------------------------------------------------------------------------------------------------------

// startsWith()  si una cadena comienza con los caracteres de otra cadena, devuelve TRUE sino devuelve FALSE.

/* let cadena = "cadena de prueba";
let cadena2 = " cadena"

resultado = cadena.startsWith(cadena2);
document.write(resultado); */

//------------------------------------------------------------------------------------------------------------

// endsWith() lo contrario de startsWith (VERIFICA QUE TERMINE COMO LE DECIMOS.)

/* let cadena = "cadena de prueba";
let cadena2 = "prueba"

resultado = cadena.endsWith("prueba");
document.write(resultado); */

//------------------------------------------------------------------------------------------------------------

// includes() si una cadena puede encontrarse dentro de otra cadena, devuelve TRUE, sino devuelve FALSE

/* let cadena = "cadena de prueba";
let cadena2 = "prueba"

resultado = cadena.includes("cadena2");
document.write(resultado); */

//------------------------------------------------------------------------------------------------------------

// indexOf() devuelve el indice del primer caracter de la cadena, si no existe devuelve -1
// DEVUELVE LA POSICION DE LA PRIMERA LETRA CONTANDO LOS ESPACIOS TAMBIEN(devolveria 11, porque la P esta en la
// posicion 10.)

/* let cadena = "cadena de prueba";
let cadena2 = "prueba"

resultado = cadena.indexOf("cadena2");
document.write(resultado); */

//------------------------------------------------------------------------------------------------------------

// lastIndexOf() devuelve el ultimo indice del primer caracter de la cadena, si no existe, devuelve -1.
// 

/* let cadena = "cadena de prueba";
let cadena2 = "prueba"

resultado = cadena.lastIndexOf("cadena2");
document.write(resultado); */

//------------------------------------------------------------------------------------------------------------

// padStart() RELLENA LA CADENA AL PRINCIPIO CON LOS CARACTERES DESEADOS
// QUEDARIA ASI: aaaabc completa la cadena hasta llegar a 6 con el caracter que hayamos elegido, en este caso A

/* let cadena = "abc";
let cadena2 = ""

resultado = cadena.padStart(6, "a");
document.write(resultado); */

// padEnd() HACE LO MISMO PERO AGREGA LOS CARACTERES AL FINAL.

//------------------------------------------------------------------------------------------------------------

// repeat() devuelve la misma cadena pero repetida la cantidad de veces que le indiquemos.
// lo que haria es repetir 123 123.


/* let cadena = "123 ";
let cadena2 = ""

resultado = cadena.repeat(2);
document.write(resultado); */

//------------------------------------------------------------------------------------------------------------

// split() Divide la cadena como le pidamos. SE CONVIERTE EN ARRAY
// EL hola como estas quedaria hola,como,estas

/* let cadena = "hola como estas";
let cadena2 = ""

resultado = cadena.split(" ");
document.write(resultado); */

//------------------------------------------------------------------------------------------------------------

// substring() lo que devolveria es solamente desde la posicion 0 hasta la 1 sin contar la posicion 2.
// quedaria asi AB (el primer parametro es donde comienza y el segundo donde termina.)

/* let cadena = "ABCDEFG";
let cadena2 = ""

resultado = cadena.substring(0,2);
document.write(resultado); */

//------------------------------------------------------------------------------------------------------------

//toLowerCase() convierte la cadena de texto a MINÚSCULA
// quedaria abcd

/* let cadena = "ABCDEFG";
let cadena2 = ""

resultado = cadena.toLowerCase();
document.write(resultado); */

//------------------------------------------------------------------------------------------------------------

//toUpperCase() convierte la cadena de texto a MINÚSCULA
// quedaria ABCD

/* let cadena = "abcd";
let cadena2 = ""

resultado = cadena.toUpperCase();
document.write(resultado); */

//------------------------------------------------------------------------------------------------------------

// toString() transforma el valor en una cadea de texto
// daria 250, porque al convertir el valor en cadena de texto concatena el 2 con el 50 que fue transformado a texto.

/* let cadena = 50;
let cadena2 = ""
let resultado = cadena

resultado = cadena.toString();
document.write(2 + "50"); */

//------------------------------------------------------------------------------------------------------------

// trim() elimina los espacios en blanco al principio y al final de una cadena

/* let cadena = "    hola    ";
let cadena2 = ""

resultado = cadena.trim();
document.write(resultado); */

//------------------------------------------------------------------------------------------------------------

// trimEnd() elimina los espacios en blanco del final de una cadena.

/* let cadena = "    hola";
let cadena2 = ""

resultado = cadena.trimEnd();
document.write(resultado); */

//------------------------------------------------------------------------------------------------------------

//trimStart() elimina los espacios en blanco del comienzo de una cadena.

/* let cadena = "   hola    ";
let cadena2 = ""

resultado = cadena.trimStart();
document.write(resultado); */

//------------------------------------------------------------------------------------------------------------












