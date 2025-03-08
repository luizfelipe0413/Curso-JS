var anum = []
var s = Number()
var rs = document.getElementById('rs')

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
            
            num.value = ''
            rs.innerHTML = ''
        }
    }
}
function fin(){
    if (anum.length == ''){
        window.alert('Insira um valor para continuar')
    } else{
        var mai = anum[0]      
        var men = anum[0]
        for(var pos in anum){
            if (anum[pos] > mai){
                mai = anum[pos]
            }
            if (anum[pos] < men){
                men = anum[pos]
            }
        }
        
        rs.innerHTML = `Ao todo, há ${(anum.length)} números cadastrados <br>`
        rs.innerHTML += `O menor valor informado foi ${men} <br>`
        rs.innerHTML += `O maior valor informado foi ${mai} <br>`
        rs.innerHTML += `Somando todos os valores, temos ${s} <br>`
        rs.innerHTML += `A média dos valores digitados é ${s/anum.length}`  
    }
}
