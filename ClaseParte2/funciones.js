//Definicion  un arreglo nombre de errroes
var arreglo = new Array();
arreglo[0] = "errorNombre";
arreglo[1] = "errorApellido";
arreglo[2] = "errorEmail";
arreglo[3] = "errorUsuario";
arreglo[4] = "errorPassword";
arreglo[5] = "errorConfirmar";

function validar() {
    var entrada = new Array();
    entrada[0] = document.getElementById('nombre').value;
    entrada[1] = document.getElementById('apellido').value;
    entrada[2] = document.getElementById('email').value;
    entrada[3] = document.getElementById('user').value;
    entrada[4] = document.getElementById('password').value;
    entrada[5] = document.getElementById('confirmarpassword').value;

    var error = new Array();
    error[0] = "<span style='color:red'> Ingrese nombre </span>";
    error[1] = "<span style='color:red'> Ingrese apellido </span>";
    error[2] = "<span style='color:red'> Ingrese email </span>";
    error[3] = "<span style='color:red'> Ingrese usuario </span>";
    error[4] = "<span style='color:red'> Ingrese password </span>";
    error[5] = "<span style='color:red'> Ingrese la confirmacion del password</span>";
    //Defiendo un ciclo foreach
    for (i in entrada) {
        var mensajeError = error[i];
        var valorArreglo = arreglo[i];
        //validando campo requerido
        if (entrada[i] == "") {
            document.getElementById(valorArreglo).innerHTML = mensajeError;
        }
        //validar correo
        else if (i == 2) {
            var arroba = entrada[i].indexOf("@");
            var punto = entrada[i].lastIndexOf(".");

            if (arroba < 1 || punto < arroba + 2 || entrada[i].length < punto + 2) {
                document.getElementById('errorEmail').innerHTML = "<span style='color:red'> Ingrese un email valido </span>";
            } else {
                document.getElementById('errorEmail').innerHTML = "Campo valido";
            }

        }
        else if (i == 5) {
            var primero = document.getElementById('password').value;
            var segundo = document.getElementById('confirmarpassword').value;

            if (primero != segundo) {
                document.getElementById('errorConfirmar').innerHTML = "<span style='color:red'> Los password no coinciden </span>";

            } else {
                document.getElementById('errorConfirmar').innerHTML = "Campo valido";
            }
        }
        else {
            document.getElementById(valorArreglo).innerHTML = "Campo valido";
        }
    }
}

function validarTodos() {
    var contador = 0;
    for (let i = 0; i < 6; i++) {
        var valorArreglo = arreglo[i];
        if (document.getElementById(valorArreglo).innerHTML == "Campo valido") {
            contador++;
        }
    }
    if (contador == 6) {
        document.getElementById('mensajefinal').innerHTML = "Formulario validado"
    }
}