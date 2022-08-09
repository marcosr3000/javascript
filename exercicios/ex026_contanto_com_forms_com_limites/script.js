let number1 = document.getElementById('number1')
let number2 = document.getElementById('number2')
let result = document.getElementById('result')

function count() {

    let n1 = Number(number1.value)
    let n2 = Number(number2.value)

    result.innerHTML += `<h2>Contando de ${n1} até ${n2}</h2>`

    if (n1 < n2) {
        for (let i = n1; i <= n2; i++) {
            result.innerHTML += `${i} \u{1F449} `
        }

    } else {
        for (let i = n1; i >= n2; i--) {
            result.innerHTML += `${i} \u{1F449} `
        }      
    }

    result.innerHTML += `\u{1F3C1}`
}