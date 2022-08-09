let result = document.getElementById("result")

function count() {
    result.innerHTML = `<h2>Contando de 1 até 10, marcando os pares</h2>`
    for (let i = 1; i <=10; i++) {
        if (i % 2 == 0) {
            result.innerHTML += `<mark><strong> ${i} </strong></mark>
             \u{1F449} `
        } else {
            result.innerHTML += ` ${i} \u{1F449} `
        }
    }
    result.innerHTML += `\u{1F3C1}`
}