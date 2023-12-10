/* 
1. Crie variáveis que capturem os valores que a usuária inserir e manipule-os nas funções 
2. Exibir o resultado na tela
*/

const botaoSubtrair = document.querySelector('#botaoSub')
const botaoMult = document.querySelector('#botaoMult')
const botaoDiv = document.querySelector('#botaoDiv')

function somar() {
    
    const num1 = Number(document.querySelector('#numero1Soma').value)
    const num2 = Number(document.querySelector('#numero2Soma').value)

    const total = num1 + num2

    document.getElementById('strongSoma').innerHTML = total

    document.querySelector("#numero1Soma").value =''
    document.querySelector("#numero2Soma").value =''

}


function subtrair() {
    const num1 = Number(document.querySelector('#numero1Sub').value)
    const num2 = Number(document.querySelector('#numero2Sub').value)

    const total = num1 - num2

    document.getElementById('strongSub').innerHTML = total

    document.querySelector("#numero1Sub").value =''
    document.querySelector("#numero2Sub").value =''
 
}




function multiplicar() {
    const num1 = Number(document.querySelector('#numero1Mult').value)
    const num2 = Number(document.querySelector('#numero2Mult').value)

    const total = num1 * num2

    document.getElementById('strongMult').innerHTML = total

    document.querySelector("#numero1Mult").value =''
    document.querySelector("#numero2Mult").value =''
   
}

function dividir() {
    const num1 = Number(document.querySelector('#numero1Div').value)
    const num2 = Number(document.querySelector('#numero2Div').value)

    const total = num1 / num2

    document.getElementById('strongDiv').innerHTML = total

    document.querySelector("#numero1Div").value =''
    document.querySelector("#numero2Div").value =''
}


botaoSubtrair.addEventListener('click', subtrair)
botaoMult.addEventListener('click', multiplicar)
botaoDiv.addEventListener('click', dividir)