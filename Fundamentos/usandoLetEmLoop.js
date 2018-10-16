/* Um exemplo de uma variável declarada com LET, dentro de um laço
 * Será que ela vai ficar visível fora do laço? Vamos descobrir...
 */

 for(let i = 0; i < 10; i++){
     console.log("Dentro do laço i =", i)
 }

 /* Perceba que ele rodou o laço e imprimiu todos os valores dentro do laço,
  * porém, quando pedimos para que imprimisse o valor fora do laço, ele retorna um erro
  *  "i is not defined" pois variáveis declaradas com LET, tem o escopo Global, em função e em bloco.
  * E como a variável i foi criada a partir de um bloco, ela só é vista dentro desse bloco, que no caso, é o nosso laço.
  */
 console.log("Fora do laço i =", i)