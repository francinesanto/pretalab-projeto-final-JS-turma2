/* 
1. Crie variáveis que capturem os valores que a usuária inserir e manipule-os nas funções 
2. Exibir o resultado na tela
*/

const botaoSubtrair = document.querySelector('#botaoSub')
const botaoMult = document.querySelector('#botaoMult')
const botaoDiv = document.querySelector('#botaoDiv')

function somar() {
    const num1 = Number(document.querySelector('#numero1Soma').value)
    const num2 = Number(document.querySelector('#numero1Soma').value)

    const total = num1 + num2

    document.querySelector('.resultado').setAttribute('id','resultadoSoma')

    const paragrafo = document.querySelector('#resultadoSoma')
    const resultado = document.createElement('strong')
    paragrafo.appendChild(resultado)
    resultado.innerText = total
    
}



function subtrair() {
    const num1 = Number(document.querySelector('#numero1Sub').value)
    const num2 = Number(document.querySelector('#numero2Sub').value)

    const total = num1 - num2

    const paragrafo = document.querySelector('#resultadoSub')
    const resultado = document.createElement('strong')
    paragrafo.appendChild(resultado)
    resultado.innerText = total

}




function multiplicar() {
    const num1 = Number(document.querySelector('#numero1Mult').value)
    const num2 = Number(document.querySelector('#numero2Mult').value)

    const total = num1 * num2

    const paragrafo = document.querySelector('#resultadoMult')
    const resultado = document.createElement('strong')
    paragrafo.appendChild(resultado)
    resultado.innerText = total
    
}

function dividir() {
    const num1 = Number(document.querySelector('#numero1Div').value)
    const num2 = Number(document.querySelector('#numero2Div').value)

    const total = num1 / num2

    const paragrafo = document.querySelector('#resultadoDiv')
    const resultado = document.createElement('strong')
    paragrafo.appendChild(resultado)
    resultado.innerText = total

}


botaoSubtrair.addEventListener('click', subtrair)
botaoMult.addEventListener('click', multiplicar)
botaoDiv.addEventListener('click', dividir)