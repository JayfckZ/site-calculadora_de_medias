const form = document.getElementById('form-atividade')

let linhas = ''
const atividades = []
const notas = []
notaMinima = parseFloat(prompt('Digite o valor da média: '))

function adicionarLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi registrada.`)
    }
    else{
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))
    
        let linha = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? '<img src="images/aprovado.png" alt="Emoji festejando">' : '<img src="images/reprovado.png" alt="Emoji triste">'}</td>`
        linha += '</tr>'
    
        linhas += linha
    }
    
    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function calculaMedia(){
    let somaDasNotas = 0
    console.log(somaDasNotas, notas.length)
    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i]
        console.log(somaDasNotas)
    }
    console.log(somaDasNotas, notas.length)
    return (somaDasNotas / notas.length)
}

function atualizarMedia(){
    const mediaFinal = calculaMedia()

    document.getElementById('media-final').innerHTML = mediaFinal.toFixed(2)
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? '<span class="resultado aprovado">Aprovado</span>' : '<span class="resultado reprovado">Reprovado</span>'
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionarLinha()
    atualizarTabela()
    atualizarMedia()
})