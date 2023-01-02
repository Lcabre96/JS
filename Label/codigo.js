array1 = ["maria", "josefa", "roberta"];
array2 = ["pedro", "marcelo", array1, "josefina"];


// LA SENTENCIA LABEL SIRVE PARA CUANDO PONEMOS UN CONTINUE O UN BREAK,
// LA FUNCION QUE CUMPLE ES SALTARSE EL BUCLE COMPLETO.


forLabel:
for (let array in array2) {
    if (array == 2) {

        for (let array in array2) {

            if (array == "maria") {

                continue forLabel;
            }
            document.write(array + "<br>");
        }
    } else {
        document.write(array2[array] + "<br>");
    }
}