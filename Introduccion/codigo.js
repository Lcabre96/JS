// recipiente = "Papel"

// alert(recipiente)

let nombre = "nada"

if (nombre == "luis") {
    alert("tu nombre es piola")
}
else if (nombre == "cabrera") {
    alert("tu apellido es: ")
} 
 
else {
    alert("no encontramos tu nombre.")
}  

// let deportes = ["futbol", "Tenis", "Basquet"];

// document.write(deportes[0]);


let pc1 = {
    nombrePc: "LuisPc",
    procesador: "Intel Core I5",
    ram: "8GB",
    espacio: "512GB"
};

let nombrePc = pc1["nombrePc"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"]

frase = `El nombre de mi PC es: <b>${nombrePc}</b> <br>
         El procesador es: <b>${procesador}</b> <br>
         La memoria ram es de: <b>${ram}</b> <br>
         El espacio en disco es de: <b>${espacio}</b>`;

document.write(frase);         

