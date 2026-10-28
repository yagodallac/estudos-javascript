function resposta() {
    let numero = document.getElementById('numero')
    let resultado = document.getElementById('resultado')

    if (numero.value.length == 0) {
    resultado.innerHTML = 'ERRO: Preencha o campo';
    } else {
    let n = Number(numero.value);
    let divTabuada = document.getElementById('tabuada');
    
    divTabuada.innerHTML = ''; 

    let meuSelect = document.createElement('select');
    meuSelect.name = 'tab';
    meuSelect.id = 'tab';
    meuSelect.size = 10;

    for (let c = 1; c <= 10; c++) {
        let item = document.createElement('option');
        item.text = `${n} x ${c} = ${n * c}`;
        item.value = `tab${c}`;
        meuSelect.appendChild(item);
    }

    divTabuada.appendChild(meuSelect);
}}
