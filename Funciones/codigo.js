

// El return RETRONA LO QUE SE LE DEFINE Y FINALIZA LA FUNCION.


function saludo() {
    alert("Hola");
    return 'El programa se ejecutó correctamente'
}

let saludando = saludo();

document.write(saludando + "<br>");



function saludar (nombre) {

    let frase = `Hola ${nombre} ¿Como Estas?`;
    document.write(frase + "<br>");
}

saludar("Raymond")


// FUNCIONES FLECHA... si solo se usa UN parametro
// NO HACE FALTA PONERLE PARENTESIS.


const hello = name=> {

    let frase = `Hola ${name} ¿Como Estas?`;
    document.write(frase + "<br>");
}

hello("jorge")



// asignarle contenido a los PARAMETROS.   

function calculo (num1, num2) {
    let res = num1 + num2;
    return res
}

let resultado = calculo(30,52);

document.write(resultado + "<br>");


// PRÁCTICA EJEMPLO

const sumar = (num1,num2)=> {
    return parseInt(num1) + parseInt(num2);    
}

const restar = (num1,num2)=> {
    return parseInt(num1) - parseInt(num2);    
}

const multiplicar = (num1,num2)=> {
    return parseInt(num1) * parseInt(num2);    
}

const dividir = (num1,num2)=> {
    return parseInt(num1) / parseInt(num2);    
}


alert("¿Que operación deseas realizar?")
let operacion = prompt("1: sumar, 2: restar, 3: multiplicar, 4: dividir");



if (operacion == 1) {
    let numero1 = prompt("Pimer numero para sumar");
    let numero2 = prompt("Segundo numero para sumar");
    resultado = sumar(numero1,numero2);
    alert(`Tu resultado es: ${resultado}`); 
}

if (operacion == 2) {
    let numero1 = prompt("Pimer numero para restar");
    let numero2 = prompt("Segundo numero para restar");
    resultado = restar(numero1,numero2);
    alert(`Tu resultado es: ${resultado}`); 
}

if (operacion == 3) {
    let numero1 = prompt("Pimer numero para multiplicar");
    let numero2 = prompt("Segundo numero para multiplicar");
    resultado = multiplicar(numero1,numero2);
    alert(`Tu resultado es: ${resultado}`); 
}

if (operacion == 4) {
    let numero1 = prompt("Pimer numero para dividir");
    let numero2 = prompt("Segundo numero para dividir");
    resultado = dividir(numero1,numero2);
    alert(`Tu resultado es: ${resultado}`); 
}


