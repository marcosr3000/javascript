let number = document.getElementById('number')
let result = document.getElementById('result')

function factorial() {

    let n = Number(number.value)

    if (n < 1 || n > 21) {
        
        alert('O valor deve ser maior ou igual a 1 ou menor ou igual a 21')
        number.value = ''

    } else {

        result.innerHTML += `<h2>Calculando ${n}!</h2>`
        let fact = 1

        for (let i = n; i > 1; i--) {
            result.innerHTML += `${i} x `
            fact *= i
        }
        
        result.innerHTML += `1 = <strong>${fact.toLocaleString('pt-br')}</strong>`
    }
}