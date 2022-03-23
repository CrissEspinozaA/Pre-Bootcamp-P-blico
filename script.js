$(document).ready(paginaLista);

console.log("Hola Robots");

function paginaLista() {
    var countVar=50000;
    $("#countDisplay").html(countVar);
    for (var i=50000; i>=0; i--){
        countVar=i;
        console.log(countVar);
        $("#countDisplay").html(countVar);
    }
    console.log("Hola Humanos");
    $("#btn").click(saludoAnimales);
}

function saludoAnimales(){
    console.log("Hola Animales");
}