let result = document.getElementById('result')

function count() {
    result.innerHTML = '<h2>Contagem regressiva de 10 a 1</h2>'
    for (let i = 10; i > 0; i--) {
        result.innerHTML += `${i} \u{1F449} `
    }
    result.innerHTML += `\u{1F3C1}`
}