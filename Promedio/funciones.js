var arreglo = new Array();
arreglo[0] = "errorNota1";
arreglo[1] = "errorNota2";
arreglo[2] = "errorNota3";
arreglo[3] = "errorNota4";
arreglo[4] = "errorExamen";
function promedioFinal() {
    var entrada = new Array();
    
    entrada[0]=document.getElementById('nota1').value;
    entrada[1]=document.getElementById('nota2').value;
    entrada[2]=document.getElementById('nota3').value;
    entrada[3]=document.getElementById('nota4').value;
    entrada[4]=document.getElementById('examen').value;


    var contarErrores = 0;
    //Probar errores
    for(i in entrada){
        //Validar que el campo no este vacío
        if(entrada[i] == ""){
            contarErrores++;
            document.getElementById(arreglo[i]).innerHTML = "<span style='color:red;font-size:12px'> Campo obligatorio </span>";
        }else if(parseInt(entrada[i]) <10 || parseInt(entrada[i]) > 70){
            //Validar que la nota no sea menor a 10 o mayor a 70
            contarErrores++;
            document.getElementById(arreglo[i]).innerHTML = "<span style='color:red;font-size:12px'>   El valor no puede ser menor a 10 o mayor a 70 </span>";
                    
        }else{
            document.getElementById(arreglo[i]).innerHTML = "";
        }
    }
    if(contarErrores == 0){
        //Obtener el promedio si no hay errores
        var sumaNotas = 0;
        for(var i = 0; i<4; i++){
            sumaNotas = sumaNotas + parseInt(entrada[i]);
        }
        promNotas = sumaNotas/4
        if(promNotas < 40 || parseInt(entrada[4])< 40){
            document.getElementById("estadofinal").innerHTML = "Reprobado";
        }else{
            document.getElementById("estadofinal").innerHTML = "Aprobado";
        }
        //Calcular ponderación final
        var promFinal = 0.6*promNotas + 0.4*entrada[4];

        document.getElementById("promedioparcial").innerHTML =  promNotas;
        document.getElementById("examenfinal").innerHTML =  entrada[4];
        document.getElementById("promediofinal").innerHTML =  promFinal;
    }
    
}

function limpiar() {
    for(i in arreglo){
        document.getElementById(arreglo[i]).innerHTML="";
        
    }
    document.getElementById("promedioparcial").innerHTML="";
    document.getElementById("examenfinal").innerHTML="";
    document.getElementById("promediofinal").innerHTML="";
    document.getElementById("estadofinal").innerHTML="";
    
}