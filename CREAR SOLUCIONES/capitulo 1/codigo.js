let free = false;

const validarCliente = (time)=> {
	let edad = prompt ("¿Cual es tu edad?");
	if (edad > 18) {
		if (time >= 2 && time < 7 && free == false) {
			alert("podes pasar gratis");
			free = true;

		} else {
			alert("podes pasar, pero tenes que pagar la entrada");
		}	
	} else{
		alert("no podes pasar, sos menor de edad");
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
