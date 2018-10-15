/*
 * Farei 2 exemplos de funções, um com retorno e outro sem... 
 */

 // Função sem retorno

 function imprimirSoma(a, b){
     console.log(a + b)
 }

 // Algumas flexibilidades  da linguagem em relação a passagem de parâmetros.
 imprimirSoma(2, 3) // Padrão, vai retornar a soma dos parâmetros.
 imprimirSoma(2) // Como só foi passado 1 parâmetro, o segundo ele considera undefined, e irá retornar NaN.
 imprimirSoma(2, 3, 4, 5, 6, 4) // Mesmo com mais de 2 parâmetros, ele só vai considerar os 2 primeiros e ignorar os outros.
 imprimirSoma() // Sem passar parâmetros, ele também retorna um NaN


 // Função com retorno.

 // Observações, vou criar uma função que recebe um parâmetro com valor padrão, caso esse parâmetro não seja informado nada hora da chamada

 function soma(a, b = 1){
     return a + b
 }

 // funcões com retorno, não pode ser chamadas avulsa, como elas tem retorno, precisa estar dentro de alguma outra coisa, para poder visualizar o retorno.

 // soma(2, 9) não retorna assim.
 
 console.log(soma(2, 9)) // Chamando ela a partir do console.log
 console.log(soma(3)) // passando somente 1 parâmetro, ela irá usar o valor padrão do segundo e realizar a soma.