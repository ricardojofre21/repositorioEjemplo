var entradasError = [];
entradasError.push("errorNombre");
entradasError.push("errorApellido");
entradasError.push("errorEmail");
entradasError.push("errorPassword");
entradasError.push("errorConfirmar");

function validar() {
    let entrada = [];
    entrada.push(document.getElementById('nombre').value);
    entrada.push(document.getElementById('apellido').value);
    entrada.push(document.getElementById('email').value);
    entrada.push(document.getElementById('password').value);
    entrada.push(document.getElementById('confirmar').value);


    let error = [];
    error.push("<span style='color: red'>El nombre no es válido</span>");
    error.push("<span style='color: red'>El apellido no es válido</span>");
    error.push("<span style='color: red'>El email no es válido</span>");
    error.push("<span style='color: red'>Ingrese el password</span>");
    error.push("<span style='color: red'>Ingrese la confirmación del Password</span>");

    //Definiendo un ciclo forech
    let contador = 0;
    for (i in entrada) {
        let mensajeError = error[i]
        let valorArreglo = entradasError[i]
        //Validando campo requerido
        if (entrada[i] == "") {
            document.getElementById(valorArreglo).innerHTML = mensajeError;
            contador++;
        }
        //Validar RUT
        // else if(i == 3){
        //     let rut = entrada[i];
        //     if(rut.length < 8 || rut.length > 9){
        //         document.getElementById('errorRut').innerHTML =
        //         "<span style='color: red'>El RUT ingresado no es válido!!</span>";
        //         contador++;
        //     }
        // }    
        //Validar password
        //Validar correo
        else if (i == 2) {
            let arroba = entrada[i].indexOf("@");
            let punto = entrada[i].lastIndexOf(".");

            if (arroba < 1 || punto < arroba + 2 || entrada[i].length < punto + 2) {
                document.getElementById('errorEmail').innerHTML =
                    "<span style='color: red'>Ingrese un email válido</span>";
                contador++;
            }
            else {
                document.getElementById('errorEmail').innerHTML = "";
            }
        }

        else if (i == 4) {
            let primero = document.getElementById('password').value;
            let segundo = document.getElementById('confirmar').value;

            if (primero != segundo) {
                document.getElementById('errorConfirmar').innerHTML =
                    "<span style='color: red'>Los password no coinciden</span>";
                contador++;
            }
        }

        else {
            document.getElementById(entradasError[i]).innerHTML = "";
        }

    }
    if (contador == 0) {
        location.href = "http://127.0.0.1:5500/Tienda/login.html";
    }


}

function limpiar() {
    for (i in entradasError) {
        document.getElementById(entradasError[i]).innerHTML = "";

    }


}