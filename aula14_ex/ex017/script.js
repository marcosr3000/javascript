function table() {
    let number = document.getElementById('number')
    let table = document.getElementById('table')
    
    if (number.value.length === 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(number.value)
        table.innerHTML = ''
        for (let c = 1; c <=10; c ++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            table.appendChild(item)
        }
    }
}