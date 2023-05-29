let nome = window.prompt('Qual é o seu nome?')
let idade = window.prompt('Quantos anos você tem?')
let linguagem = window.prompt('Qual linguagem de programação você está estudando?')
const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`
alert(msg)
let resposta = window.prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO`)
if (resposta == 1){
    // dê a resposta positiva
    alert('Muito bom! Continue estudando e você terá muito sucesso.')
}
if (resposta == 2){
    // dê a resposta negativa
    alert('Ahh que pena... Já tentou aprender outras linguagens?')
}
