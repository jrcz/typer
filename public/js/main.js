var frase = $(".frase").text()

$("#quantidade-palavras").text(frase.split(" ").length)

var campo = $(".campoDigitacao")

campo.on("input", function(){
    $("#contadorPalavras").text(campo.val().split(/\s+/).length-1)
    $("#contadorCaracteres").text(campo.val().length)
})

var tempoRestante = $("#tempoDigitacao").text()
campo.one("focus", function(){
    var cronometro = setInterval(function(){
        tempoRestante--  
        $("#tempoDigitacao").text(tempoRestante)  
        if(tempoRestante < 1){
            campo.attr("disabled", true)
            clearInterval(cronometro)
        }
    }, 1000)
})




