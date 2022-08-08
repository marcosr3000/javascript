let number = document.getElementById('number')
let result = document.getElementById('result')

function count() {

    let n = Number(number.value)

    if (n < 0) {
        
        alert('Digite um valor maior que 0 (zero)')
        number.value = ''

    } else {

        // result.insertAdjacentHTML('beforeend', `<h2>Contando de 0 até ${n}</h2>`)

        // for (let i = 0; i <= n; i++) {
        //     result.insertAdjacentHTML('beforeend', `${i} \u{1F449} `)
        // }
        // result.insertAdjacentHTML('beforeend', `\u{1F3C1}`)

        result.innerHTML += `<h2>Contando de 0 até ${n}</h2>`

        for (let i = 0; i <= n; i++) {
            result.innerHTML += `${i} \u{1F449} `
        }
        result.innerHTML += `\u{1F3C1}`
    }
}