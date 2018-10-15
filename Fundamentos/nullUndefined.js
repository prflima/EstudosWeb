// Algumas situações para mostrar os valores null e undefined.

let valor // Não inicializada.
console.log(valor) // Undefined, pois declaramos a variável, porém não atribuimos nenhum valor nela.

valor = null // ausência de valor
console.log(valor) // Null, pois atribuimos o valor null pra ela, dizendo assim, que é um valor null.
// console.log(valor.toString()) // Erro

const produto = {}
/*
 * Outro exemplo de undefined, abaixo vou pedir pra imprimir o objetivo produto, com o atributo preco
 * ele vai retornar que não existe atributos no objeto produto, pois ele é undefined.
*/
console.log(produto.preco)
console.log(produto)

// Agora vamos adicionar um atributo no objeto
produto.preco = 98.90
console.log(produto)

// não é considerado uma boa pratica, atribuir undefined a uma variavel ou constante
// é melhor que a propria linguagem defina isso.
produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco) // Retornará false, pois como atribuimos undefined, logo ele não encontrara nada, sendo assim, false.
console.log(produto)
