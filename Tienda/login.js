var arreglo = new Array();
arreglo[0] = "errorEmailLogin";
arreglo[1] = "errorPasswordLogin";

function login() {
    var entrada = new Array();
    entrada[0] = document.getElementById('emaillogin').value;
    entrada[1] = document.getElementById('passwordlogin').value;
    var error = new Array();
    error[0] = "<span style='color:red'> Ingrese email </span>";
    error[1] = "<span style='color:red'> Ingrese password </span>";
    var contarErrores = 0;
    for (i in entrada) {
        var mensajeError = error[i];
        var valorArreglo = arreglo[i];
        //validando campo requerido
        if (entrada[i] == "") {
            contarErrores++;
            document.getElementById(valorArreglo).innerHTML = mensajeError;
        }

        else if (i == 0) {
            var arroba = entrada[i].indexOf("@");
            var punto = entrada[i].lastIndexOf(".");

            if (arroba < 1 || punto < arroba + 2 || entrada[i].length < punto + 2) {
                contarErrores++;
                document.getElementById('errorEmailLogin').innerHTML = "<span style='color:red'> Ingrese un email valido </span>";
            } else {
                document.getElementById('errorEmailLogin').innerHTML = "Campo valido";
            }

        }
        else {
            document.getElementById(valorArreglo).innerHTML = "Campo valido";
        }
    }
    if (contarErrores == 0) {
        location.href = "http://127.0.0.1:5500/Tienda/home.html";
    }
}