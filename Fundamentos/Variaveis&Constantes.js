// Vamos fazer alguns exemplos de declações de variáveis com var, let e const.

// Declarando variavel com var e let.

var n1 = 5
let n2 = 6

var n1 = 500
/* Nota-se que o var, sobrescreve o n1, mesmo que eu tenha-o usado em outra parte do código
 * em outras linguagens isso seria um erro de código, porém no JavaScript ele consegue interpretar sem problemas
 * porém isso não é considerado uma boa prática, tornando assim, o uso do "let" mais interessante.
 * Claro, dependendo do que voce quer fazer.
*/
n2 = 10

console.log(n1, n2)

/*
 * A palavra const cria uma constante, diferente de variáveis, constante não podem sofrer alterações no valor.
 * Como no exemplo comentado abaixo. Ela sempre vai ter o objeto, função ou valor que fora declarado assim que 
 * fora chamada.    
*/
const n3 = 12
//n3 = 10  <-- Não é possível alterar o valor, objeto ou função de uma constante. 

console.log(n3)