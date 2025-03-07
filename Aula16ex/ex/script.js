var anum = []
var s = Number()
function adic() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('tab')
    
    if (num.value === '' || num.value > 100 || num.value < 1) {
        return window.alert('Insira um valor válido para continuar')
    } else {
        var n = Number(num.value)
        if (anum.includes(n)) {
            window.alert('Número já adicionado!')
        } else {
            anum.push(n)
            s += n

            var item = document.createElement('option')
            item.text = `Valor ${n} adicionado`
            tab.appendChild(item)
            
        }
    }
}
function fin(){
    var rs = document.getElementById('rs')



    rs.innerHTML = `Ao todo, há ${(anum.length)} números cadastrados <br>`
    rs.innerHTML += `O menor valor informado foi ${anum[0]} <br>`
    rs.innerHTML += `O maior valor informado foi ${anum[anum.length - 1]} <br>`
    rs.innerHTML += `Somando todos os valores, temos ${s} <br>`
    rs.innerHTML += `A média dos valores digitados é ${s/anum.length}`
}
