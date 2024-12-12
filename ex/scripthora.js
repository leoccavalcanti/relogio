var foto = window.document.getElementById('imagem')
var msg = window.document.getElementById('msg')

var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 5 && hora < 12) {
    foto.src = 'fotomanha.jpg'
    document.body.style.background = '#8a9eb8'

} 
else if (hora >= 12 && hora < 18){
    foto.src = 'fototarde.jpg'
    document.body.style.background = '#dcdacd'
} 
else {
    foto.src = 'fotonoite.jpg'
    document.body.style.background = '#4816cb'
}

