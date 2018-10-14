/*
 * Vamos falar sobre a tipagem de dados JavaScript.
 * A tipagem do JavaScript é considerada uma tipagem dinâmica, ou seja, ela se adapta com o tipo de dado
 * em que ela recebe, podendo na mesma variável (claro que não de uma única vez), uma hora atribuir dados em string
 * outrora atribuir dados em inteiros, booleans ou outros.. 
*/

//Na prática


/*
 * Criamos uma variável com o nome "qualquer" e atribuimos um valor em texto(string)
 * Em seguida pedi pra imprimir esse valor no console e abaixo o tipo dessa variável 
*/
let qualquer = "Olá Mundo!"
console.log(qualquer)
console.log(typeof qualquer)


/*
 * Utilizando a mesma variável, vamos atribuir um valor númerico e pedir para
 * imprimir no console o valor e o tipo igual no exemplo acima
*/
qualquer = 3.20
console.log(qualquer)
console.log(typeof qualquer)

// Após rodar o código, perceba que primeiro ele recebeu o dado em texto e tipou como string.
// no segundo exemplo, com a mesma variável ele recebeu o valor númerico e tipou como number.
// Isso faz do JavaScript uma linguagem com tipagem dinâmica(fraca).


/*
 * DICA: Uma boa prática na criação de variável ou constantes, é evitar nomes genericos ou siglas
 * Ex: let valor = ''
 *     let numero = 1
 *     const pqp = false (Produto Químico Perigoso kkkk)
 * 
 * Isso torna a leitura, não só pra você mais para outros programadores, um tanto complicada
 * visto que se for um algoritmo extenso, fica dificil perceber o que aquela determinada variavel ou constante faz.
 * 
 * Sendo assim, considere como boa prática o exemplo abaixo.
 * Ex: let altura = 1.82
 *     let nomeUsuario = 'Paulo'
 * Nesse modo, fica mais legivel o seu código e mais fácil de identificar o que cada uma guarda.
*/