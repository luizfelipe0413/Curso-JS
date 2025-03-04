function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || fano.value > ano){
        window.alert('Digite um valor VÁLIDO')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gen = 'Masculino'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imgs/hc.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imgs/hj.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imgs/hd.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imgs/hi.jpg')
            }
            
        } else if (fsex[1].checked) {
            gen = 'Feminino'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imgs/mc.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imgs/mj.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imgs/md.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imgs/mi.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${gen} com ${idade} anos`
        res.appendChild(img)
        
        
    }
}