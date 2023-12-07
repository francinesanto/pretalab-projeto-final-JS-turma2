/*
  Calcule a média da estudante, em seguida, com base na nota exiba as seguintes 
  frases:
    1. Se a nota for 0, mostre na tela: "Infelizmente você zerou a prova :( "
    2. Se a nota for entre 0.1 e 3, mostre na tela: 
      "Caramba, deu ruim, você obteve media {nota}! Estude mais e tente novamente!"
    3. Se a nota for entre 3.1 e 5.9, mostre na tela: 
      "Você obteve media {nota}! Falta pouco para a média."
    4. Se a nota for entre 6 e 7, mostre na tela: "Você está na média com {nota}"
    5. Se a nota for entre 7.1 e 9.9, mostre na tela: "Notão! Sua média é {nota}!"
    6. Se a nota for entre 10, mostre na tela: 
      "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média"
*/
const botaoMedia = document.querySelector('#btnSituacao')

function calcularMedia() {
  const nota1 = Number(document.querySelector('#nota1').value)
  const nota2 = Number(document.querySelector('#nota2').value)
  const nota3 = Number(document.querySelector('#nota3').value)
  const nota4 = Number(document.querySelector('#nota4').value)
  
  const soma = nota1 + nota2 + nota3 + nota4

  let media = soma / 4

  let mensagem = ''

  if(media === 0 ){
      mensagem = `Você obteve média de ${media}, infelizmente você zerou a prova :( `
  } else if(media >= 0.1 && media <= 3){
     mensagem = `Você obteve média de  ${media}, estude mais e tente novamente! `
  } else if(media >= 3.1 && media <= 5.9){
     mensagem = `Você obteve média de  ${media}. Falta pouco para a média! `
  } else if(media >= 6 && media <= 7){
      mensagem= `Você obteve média de  ${media}. Você está na média! `
  } else if(media >= 7.1 && media <= 9.9){
      mensagem = `Você obteve média de  ${media} Notão! `
  } else{
      mensagem = `Hoje é seu aniversário? Pq você ta de parabéns! 10 de média `
  }

const divContent = document.querySelector('#contentCalcMedias')
const resultado = document.createElement('p')
divContent.appendChild(resultado)
resultado.innerText = mensagem

function limparInput(){
    document.querySelector('#nota1').value = ''
    document.querySelector('#nota2').value = ''
    document.querySelector('#nota3').value = ''
    document.querySelector('#nota4').value = ''
    const div=document.querySelector('#contentCalcMedias')
    div.removeChild(div.lastChild)
}

setInterval(function(){
    limparInput()
}, 10 * 1000)

}

botaoMedia.addEventListener('click', calcularMedia)