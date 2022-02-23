function calcular() {
    var resultado = 1

    var numero = parseFloat(document.getElementById("n1").value)

    for (var i = 1; i <= numero; i++) {
        resultado = i * resultado
    }

    document.getElementById("resultado").innerHTML = `${resultado}`
}