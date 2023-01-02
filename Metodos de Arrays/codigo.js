
/* MÉTODOS TRANSFORMADORES (métodos que transforman el ARRAY) */

// pop() elimina el último elemento de un array y lo devuelve.
// me devolvería el nombre JORGE

let nombres = ["pedro", "maria", "jorge"];

document.write("Array original: <b>" +nombres + "</b><br>");
let resultado = nombres.pop();

document.write("Elemento removido: <b style='color:red'>" +resultado + "</b><br>");
document.write("Resultado: <b>" +nombres + "</b><br><br>");

//------------------------------------------------------------------------------------------------------------

// shift() elimina el primer elemento de un array y lo devuelve.
// devolvería el nombre PEDRO

/* let nombres = ["pedro", "maria", "jorge"];

let resultado = nombres.shift();
document.write(resultado); */

//------------------------------------------------------------------------------------------------------------

// push() agrega un elemento al array al final de la lista.
// agregaría el nombre NACHO al final junto a Jorge.

/* let nombres = ["pedro", "maria", "jorge"];

let resultado = nombres.push("nacho");
document.write(resultado); */

//------------------------------------------------------------------------------------------------------------

// reverse() invierte el orden de los elementos de un array.

let numeros = [1,2,3,4,5];

document.write(numeros + "<br>");

numeros.reverse();
document.write(numeros + "<br><br>");

//------------------------------------------------------------------------------------------------------------

// unshift() agrega uno o mas elementos al inicio del array, y devuelve la nueva longitud del array.
// el array quedaría así [0,1,2,3,4,5]
/* 
let numeros = [3,4,5];

document.write(numeros + "<br>");

numeros.unshift(0,1,2);
document.write(numeros); */

//------------------------------------------------------------------------------------------------------------

// sort() ordena los elementos de un array localmente y devuelve el array ordenado.
// los ordena de menor a mayor o alfabeticamente.

let num = [3,4,5,1,2,7,6];

document.write(num + "<br>");

num.sort();
document.write(num + "<br><br>");

//------------------------------------------------------------------------------------------------------------

// splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
// el primer parametro es donde arranca y el segundo le indicamos cuantos elementos queremos eliminar--
// incluyendo el primer parametro, quedaria ["pedro", "rober"]
// tambien como tercer parametro se puede agregar otro o mas elementos en el espacio que quedó vacio
// quedaria ["pedro", "manuel", "rober"]

/* 
let num = ["pedro", "maria", "jose", "jorge", "rober"];

document.write(num + "<br>");

num.splice(1,3,"manuel");
document.write(num); */

//------------------------------------------------------------------------------------------------------------

/* MÉTODOS ACCESORES */

// join() une todos los elementos de una matriz o objeto similar en una cadena y la devuelve.
// quedaría [pedro-maria-jose-jorge-rober]

/* 
let nombres = ["pedro", "maria", "jose", "jorge", "rober"];

document.write(nombres + "<br>");

let resultado = nombres.join(" - ");
document.write(resultado); */

//------------------------------------------------------------------------------------------------------------

// slice() devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin(fin no incluido)
// devolvería ""pedro" y "maria" el elemento 2 no se incluye.

/* 
let nombres = ["pedro", "maria", "jose", "jorge", "rober"];

document.write(nombres + "<br>");

let resultado = nombres.slice(0,2);
document.write(resultado); */

//------------------------------------------------------------------------------------------------------------

/* MÉTODOS DE REPETICIÓN */

// filter() crea un nuevo array con todos los elementos que cumplan la condición.

let names = ["roberto","francisco","juan","reynaldo"];

names.filter(name=> document.write(name + "<br>"))

//------------------------------------------------------------------------------------------------------------

// forEach() ejecuta la función indicada una vez por cada elemento del array.
