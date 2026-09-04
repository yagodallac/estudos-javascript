function carregar() {
    var msg = document.getElementById('msg');
    var foto = document.getElementById('foto');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são <strong>${hora} horas.</strong>`;
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        foto.src = 'imagens/manha.jpg';
        document.body.style.background = '#e2cd9f';
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        foto.src = 'imagens/tarde.jpg';
        document.body.style.background = '#b98550';
    } else {
        // BOA NOITE!
        foto.src = 'imagens/noite.jpg';
        document.body.style.background = '#1c1c4c';
        document.body.style.color = 'white';
        document.getElementById('msg').style.color = 'black';
    }
}