function contar(){
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpas') 
    var rs = document.querySelector('#rs>p')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        rs.innerHTML = 'Impossível contar!'
        //window.alert('Faltam dados')
    } else{
        rs.innerHTML = ''
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            p = 1
        }
        if (i < f){
            for(var y = i;y <= f;y += p){
                rs.innerHTML += `${y} \u{1F449}`
            }
        } else{
            for(var y = i; y >= f;y -= p){
                rs.innerHTML += `${y} \u{1F449}`
            }
        }
        rs.innerHTML += `\u{1F3C1}`
    }   

}       