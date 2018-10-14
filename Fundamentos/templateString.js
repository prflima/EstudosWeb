// Vamos ver alguns exemplos de template string

var nome = "Paulo Ricardo"

var concatenacao = "Olá " + nome + "!"

var template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

// Nota-se que o modelo template, acessa a variável nome e considera a quebra de linha....

// Algumas expressões

console.log(`1 + 1 = ${1 + 1}`) // o JS consegue interpretar o que está nas chaves e realizar uma soma.

// é possível também, adicionar funções dentro dos templates...

const up = texto => texto.toUpperCase() 
console.log(`Eiii... ${up('cuidado')}!`)

