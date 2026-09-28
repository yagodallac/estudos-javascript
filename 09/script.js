function verificar() {
    var anoNascimento = document.getElementById('ano')
    var res = document.getElementById('res')
    var dataAtual = new Date()
    var anoAtual = dataAtual.getFullYear()

    if (anoNascimento.value.length == 0 || anoNascimento.value > anoAtual) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var sexo = document.getElementsByName('sexo')
        var idade = anoAtual - Number(anoNascimento.value)
        var genero = ''
        var img = document.createElement('img')

        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/crianca m.jpg')
            } else if (idade < 25) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem m.jpg')
            } else if (idade < 59) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto m.jpg')
            } else if (idade < 115) {
                // Idoso
                img.setAttribute('src', 'imagens/idoso m.jpg')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/crianca f.png')
            } else if (idade < 25) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem f.jpg')
            } else if (idade < 59) {
                // Adulto
                img.setAttribute('src', 'imagens/adulta f.avif')
            } else if (idade < 115) {
                // Idoso
                img.setAttribute('src', 'imagens/idosa f.jpg')
            } else {
                alert('[ERRO] Verifique os dados e tente novamente!')
            }
        }   

            res.innerHTML = `Voce é um(a) ${genero} com ${idade} anos.`
            res.appendChild(img)}
        }
        