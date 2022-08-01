let number = document.getElementById('number')
let table = document.getElementById('table')
let result = document.getElementById('result')
var array = []

//------------------------------------------

// Resolução Prof. Gustavo Guanabara

//     function isNumber(n) {
//         if(Number(n) >= 1 && Number(n) <=100) {
//             return true
//         } else {
//             return false
//         }
//     }

//     function inTable(n, l) {
//         if(l.indexOf(Number(n)) != -1) {
//             return true
//         } else {
//             return false
//         }
//     }

//     function add() {
//         if (isNumber(number.value) && !inTable(number.value, array)) {
//             array.push(Number(number.value))
//             let item = document.createElement('option')
//             item.text = `Valor ${number.value} adicionado`
//             table.appendChild(item)
//             result.innerHTML = ''
//         } else {
//             alert('Valor inválido ou já encontrado na lista.')
//         }
//         number.value = ''
//         number.focus()
//     }

//     function finish() {
//         if (array.length == 0) {
//             alert('Adicione valores antes de finalizar')
//         } else {
//             let totalItems = array.length
//             result.innerHTML += `<p>Ao todo, temos ${totalItems} números cadastrados</p>`

//             let max = array[0]
//             let min = array[0]
//             let sum = 0
//             let media = 0
//             for (let position in array) {
//                 sum += array[position]
//                 if (array[position] > max)
//                     max = array[position]
//                 if (array[position] < min)
//                     min = array[position]
//             }
//             result.innerHTML += `<p>O maior valor informado foi ${max}.</p>
//             <p>O menor valor informado foi ${min}.</p>
//             <p>Somando todos os valores, temos ${sum}.</p>
//             `

//             media = sum / totalItems
//             result.innerHTML += `<p>A média dos valores digitados é ${sum / array.length}.</p>`
//         }

    

// }

//------------------------------------------

function add() {

    result.innerHTML = ''
    
    let n = Number(number.value)

    if (n < 1 || n > 100 || n.length === 0 || array.indexOf(n) != -1) {
        
        alert('Valor inválido ou já encontrado na lista')
    } else {
        
        array.push(n)
        console.log(array)

        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        table.appendChild(item)      
    }
    number.value = ''
    number.focus() // para manter o cursor no campo
              
}

function finish() {
    if (array.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let sum = 0
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        result.innerHTML = `
        <p>Ao todo, temos ${array.length} números cadastrados</p>
        <p>O maior valor informado foi ${Math.max(...array)}.</p>
        <p>O menor valor informado foi ${Math.min(...array)}.</p>
        <p>Somando todos os valores, temos ${sum}.</p>
        <p>A média dos valores digitados é ${sum / array.length}.</p>
        `
    }

    

}
