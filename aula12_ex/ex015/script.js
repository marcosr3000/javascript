function clicar() {
    var agora = new Date()
    var anoatual = agora.getFullYear()      
    var anouser = window.document.getElementById('anonasc')
    var anonasc = Number(anouser.value)
    var idade = anoatual - anonasc
    
    var sexo = window.document.getElementsByName('sexo')[0,1]

    var msg = window.document.getElementById('msg')
    msg.innerHTML = `
    <p>Detectamos ${sexo}, com ${idade} anos.</p>
    `

    var img = window.document.getElementById('img')
    
    if (idade < 15 && sexo == 'Masculino'){
        img.src = 'homem-crianca.png'
    }




}