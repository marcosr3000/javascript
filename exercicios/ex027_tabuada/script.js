let number = document.getElementById('number')
let result = document.getElementById('result')

function doTable() {

    let n = Number(number.value)

    result.innerHTML = `<h2>Tabuada de ${n}</h2>`

        for (let i = 1; i <= 10; i++) {
            result.innerHTML += `${n} x ${i} = <strong>${n*i}</strong><br>`
        }
}
