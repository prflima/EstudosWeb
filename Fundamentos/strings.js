// Vamos usar algumas funções do tipo String

const escola = "Cod3r"

console.log(escola.charAt(2)) // Aqui estou pedindo pra retornar o caracter que estiver na posição "2" na constante escola

console.log(escola.charCodeAt(3)) // Aqui estou pedindo pra retornar o codigo ASCII do caracter na posição (3) na constante escola

console.log(escola.indexOf('C')) // Aqui ele retorna a posição do caracter 'C' na constante escola.

console.log(escola.substring(1)) // Aqui ele vai retornar o valor em escola, a partir da posição 1

console.log(escola.substring(0, 3)) // Aqui ele retorna o valor em escola, a partir da posição 0 me retorne 3 caracteres. 

console.log('Escola '.concat(escola).concat("!")) // Usando a função concatenar a partir de um literal.

console.log('Escola ' + escola + "!") // Outra forma de concatenar

console.log(escola.replace(3, 'e')) // A função replace, substitui um caracter dentro de escola, pelo 'e'

console.log(escola.replace(/\d/, 'e')) // Substituindo todos os numeros por 'e' 

console.log(escola.replace(/\w/g, 'e')) // Substituindo todos os caracteres por 'e'

console.log('Paulo, Ana, Pedro'.split(',')) // Aqui estamos pedindo pra separar os valores pela ',' e gerar um array 


/*
 * No exemplo abaixo, o que em outras linguagens iria gerar um erro
 * em JavaScript retorna somente um valor vazio, porém, é necessário atentar-se
 * para não cometer este erro.
 * 
 * No caso, estou pedindo pra retornar o caracter que estiver na posição (7),
 * porém, essa posição não existe na constante escola, pois "Cod3r" tem apenas 4 posições
 * OBS: Lembrando que contamos as posições a partir do 0 
 */
console.log(escola.charAt(7))
