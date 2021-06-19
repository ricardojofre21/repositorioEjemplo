var suma = 0;

function sumarCarrito(precio){
    suma = suma + precio;
    console.log(suma);

}
function mostrarTotal(){
    document.getElementById("mostrarTotal").innerHTML = "El total de la compra es: " + suma;
}