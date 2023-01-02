// for (let i = 6; i >= 0; i--) {
//     document.write(i + "<br>")
// }

// document.write(i)


// SENTENCIA BREAK

for (let i = 0; i < 20; i++) {
    if (i == 12) {
        break;
    }

    document.write(i + "<br>");
  
}

let free = false;

const validarCliente =  (time) => {
    let edad = prompt("¿Cual es tu edad?");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert ("Podes pasar gratis por ser la primera persona en ingresar despues de las 2AM")
            free = true;    
        } else {
            alert (`Son las ${time}:00 HS y podes pasar, pero tenes que pagar la entrada`)
        }
    } else {
        alert ("Sos menor de edad, no vas a poder pasar.")
    }
}


validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);