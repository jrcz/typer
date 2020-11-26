var campo = $(".campoDigitacao")
var tempoInicial = $("#tempoDigitacao").text()


$(function(){
    atualizaTamanhoFrase()
    inicializaContadores()
    inicializaCronometro()
    $("#botaoReiniciar").click(reiniciaJogo)
})


function atualizaTamanhoFrase(){
    var frase = $(".frase").text()
    var tempoInicial = $("#tempoDigitacao").text()
    
    $("#quantidade-palavras").text(frase.split(" ").length)
}


function inicializaContadores(){
    campo.on("input", function(){
        $("#contadorPalavras").text(campo.val().split(/\s+/).length-1)
        $("#contadorCaracteres").text(campo.val().length)
    })
}



function inicializaCronometro(){
    var tempoRestante = $("#tempoDigitacao").text()
    campo.one("focus", function(){
        $("#botaoReiniciar").attr("disabled", true)
        var cronometro = setInterval(function(){
            tempoRestante--  
            $("#tempoDigitacao").text(tempoRestante)  
            if(tempoRestante < 1){
                campo.attr("disabled", true)
                clearInterval(cronometro)
                $("#botaoReiniciar").attr("disabled", false)
            }
        }, 1000)
    })
    
}



function reiniciaJogo(){
    campo.attr("disabled", false)
    campo.val("")
    $("#contadorPalavras").text(0)
    $("#contadorCaracteres").text(0)
    $("#tempoDigitacao").text(tempoInicial)
    inicializaCronometro()
}






