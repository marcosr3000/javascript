

// var inicio = 2
// var fim = 10
// var passo = 2

function clicar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var contagem = document.getElementById('contagem')

    var i = Number(inicio)
    var f = Number(fim)
    var p = Number(passo)


    while(inicio <= fim) {
        // contagem.innerHTML = `${inicio.value} &#x1F449 `
        console.log(`${inicio.value} &#x1F449`)
        inicio += passo
    }

}