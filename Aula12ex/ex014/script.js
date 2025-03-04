function carregar(){
    var msg = window.document.querySelector('#msg>p')
    var img = window.document.getElementById('imag')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = 'm.jpg'
        document.body.style.background = '#675040'
    } else if (hora >= 12 && hora < 18){
        img.src = 't.jpg'
        document.body.style.background = '#182B3A'
    } else {
        img.src = 'n.jpg'
        document.body.style.background = '#785F98'
    }

}
