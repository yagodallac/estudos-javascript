function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Erro: Preencha todos os campos'
    } else {
        res.innerHTML = 'Contando... <br>'
        res.style.backgroundColor = 'green'
        res.style.borderRadius = '10px'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f) {
        for (let x= i; x <= f; x += p) {
            res.innerHTML += `${x} - `
        }
    } else if (i > f) {
        for (let x = i; x >= f; x -= p) {
            res.innerHTML += `${x} - `
        }
    } else if (p > i || p > f) {       
        res.innerHTML = `ERRO`
        res.style.backgroundColor = 'red'
        }
    }
}
