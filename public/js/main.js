var campo = $(".campo-digitacao")
var tempoInicial = $("#tempoDigitacao").text()


$(function(){
    atualizaTamanhoFrase()
    inicializaContadores()
    inicializaCronometro()
    inicializaMarcadores()
    $("#botaoReiniciar").click(reiniciaJogo)
})


function atualizaTamanhoFrase(){
    var frase = $(".frase").text()
    var tempoInicial = $("#tempoDigitacao").text()
    
    $("#quantidade-palavras").text(frase.split(/\s+/).length)
}


function inicializaContadores(){
    campo.on("input", function(){
        $("#contadorPalavras").text(campo.val().split(/\s+/).length-1)
        $("#contadorCaracteres").text(campo.val().length)
    })
}

function inicializaMarcadores(){
    var frase = $(".frase").text()
    campo.on("input", function(){
        var digitado = campo.val()
        var comparavel = frase.substr(0, digitado.length)
    
        if(digitado == comparavel){
            campo.addClass("borda-verde")
            campo.removeClass("borda-vermelha")
        }else{
            campo.addClass("borda-vermelha")
            campo.removeClass("borda-verde")
        }
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
                campo.addClass("campo-desativado")
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
    campo.removeClass("campo-desativado")
    campo.removeClass("borda-vermelha")
    campo.removeClass("borda-verde")
    inicializaCronometro()
}






