var numeroSecreto = parseInt(Math.random() * 11)
//Math.random gera um numero float.
//ao multiplicar por 11 com o parseInt ele retorna numeros de 0 a 10 

function chutar() {
    var elementoResultado = document.getElementById("resultado")

    var chute = parseInt(document.getElementById("valor").value)
    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou"
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Digite um numero de 0 a 10"
    } else {
        elementoResultado.innerHTML = "Errou, o numero secreto era " + numeroSecreto
    }
}