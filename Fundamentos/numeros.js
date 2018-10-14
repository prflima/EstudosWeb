// Vamos escrever alguns códigos com o tipo number.

const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
// A função "isInteger()" verifica se o valor dentro do parâmetro é do tipo number e retorna "true or false"


const avaliacao = 9.89
const avaliacao2 = 6.87

const total = avaliacao * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)


// Para definirmos as casas decimais, utilizamos o metodo "toFixed() e passamos dentro do parametro a quantidade de casas desejadas."
console.log(media.toFixed(2))

// Para convertermos um valor númerico para string, usaremos o metodo "toString()" chamando ele a partir da constante media. 
console.log(media.toString())

// O parametro 2, em "toString", converte em binário.
console.log(media.toString(2))
