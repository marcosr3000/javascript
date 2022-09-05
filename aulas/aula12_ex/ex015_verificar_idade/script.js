function verificar() {
    var data = new Date()
    var ano = data.getFullYear()      
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) { 
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'foto-homem-crianca.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-homem-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-homem-adulto.png')
            } else {
                img.setAttribute('src', 'foto-homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'foto-mulher-crianca.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-mulher-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-mulher-adulta.png')
            } else {
                img.setAttribute('src', 'foto-mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)    
    }
}