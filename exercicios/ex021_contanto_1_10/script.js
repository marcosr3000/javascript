let result = document.getElementById("result")

function count() {
    result.innerHTML = `<h2>Contando de 1 até 10</h2>`
    for (let i = 0; i <=10; i++) {
        result.innerHTML += `${i} \u{1F449} `
    }
    result.innerHTML += `\u{1F3C1}`
}