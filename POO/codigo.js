class Animal {
    constructor(especie,edad,color) {
        this.especie = especie;
        this.edad = edad;
        this.color =  color;
        this.info = `Soy ${especie}, tengo ${edad} años y soy de color ${color}`; 
    }
    verInfo() {
        document.write(this.info + "<br>");
    }
}

let perro = new Animal("perro",6,"marron");
let gato = new Animal("gato",4,"cafe");
let pajaro = new Animal("loro",3,"verde");


perro.verInfo();
gato.verInfo();
pajaro.verInfo();



class Celular {
    constructor(color,peso,tamaño,rdc,ram) {
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;    
    }
    presionarBotonEncendido() {
        if (this.encendido == false) {
            alert("Celular encendido");
            this.encedido = true;
        } else {
            alert("El celular está apagado");
            this.encendido = false;
        }
    }
    reiniciar() {
        if (this.encendido == true) {
            alert("Reiniciando el celular");
        } else {
            alert("El celular está apagado");
        }
    }
    tomarFoto() {
        alert(`El celular toma fotos en una resolución de: ${resolucionDeCamara}`);
    }
    grabarVideo() {
        alert(`El celular graba videos en una resolución de: ${resolucionDeCamara}`);
    }

    mobileInfo() {
        return `
        color: <b>${this.color}</b><br>
        peso: <b>${this.peso}</b><br>
        Resolución de Pantalla: <b>${this.tamaño}</b><br>
        Memoria ram: <b>${this.memoriaRam}</b><br>
        Resolución de Video: <b>${this.resolucionDeCamara}</b><br>
        `;
    }
}

// EXTENDES SE UTILIZA PARA LA HERENCIA

class CelularAltaGama extends Celular {
    constructor(color,peso,tamaño,rdc,ram,rdce) {
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento() {
        alert("Estás grabando en camara lenta");
    }
    reconocimientoFacial() {
        alert("Comezando el reconocimiento facial");
    }
    infoAltaGama() {
        return this.mobileInfo() + `Resolución de cámara extra: ${this.resolucionDeCamaraExtra}`;
    }
}


celular1 = new Celular("Rojo","150g","5'","HD","1GB");
celular2 = new Celular("Negro","175g","5.5'","full HD","2GB");
celular3 = new Celular("Blanco","120g","4.8'","full HD","3GB");

celular4 = new CelularAltaGama("Morado","170g","5'","2K","3GB","HD");
celular5 = new CelularAltaGama("Grafito","110g","5.5g","4K","4GB","full HD");


document.write(`
    ${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    ${celular3.mobileInfo()} <br><br>
    
`);


document.write(`
    ${celular4.infoAltaGama()} <br><br>
    ${celular5.infoAltaGama()} <br>
`);

