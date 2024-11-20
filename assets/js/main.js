$(document).ready(function () {
    const descuento1 = "JQUERY2222"

    $("#input").on("input", function() {
        const frase = $(this).val();
        if (frase === descuento1){
            $(this).css("background-color", "lightblue")
            $(this).css("color", "blue")
        }
    });
    $("#input").on("blur", function() {
        const frase = $(this).val();
        if (frase === descuento1){
            $(this).css("background-color", "lightgreen")
            $(this).css("color", "green")
        }
    });
    $("#boton").click(function () {
        $(this).text("¿Estas seguro?")
        $(this).css("background-color", "#FFBA14")
        $(this).css("border-color", "#FFBA14")
    })
    $("#boton").dblclick(function () {
        $(this).text("¿Estas seguro?")
        $(this).css("background-color", "#252440")
        $(this).css("color", "white")
        $(this).css("border-color", "#252440")
    });
    $("#boton").mouseout(function () {
        $(this).css("background-color", "lightgray")
        $(this).text("COMPRADO")
        $(this).css("color", "green")
        $(this).css("border-color", "red")
    })
})