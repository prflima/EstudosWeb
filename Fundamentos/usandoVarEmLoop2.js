/* Mais um exemplo sobre VAR em loop, para fixar a diferença..
 * Enfim, vamos descobrir como se comporta uma variável var em um loop e dentro de uma função.
 */

const funcs = []

for(var i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

/* Pode parecer inesperado, mas o resultado que irá aparecer será 10.
 * Pois como o VAR não tem escopo de bloco, quando eu a chamo fora do laço,
 * ela retorna o valor de "i" e fora do laço "i" tem o valor de 10.
 * 
 * OBS: Para entender melhor, a função guarda o valor de i, e independente da posição eu chamo a função após 
 * o final do laço, e o laço se quebra quando "i" é igual a 10.
 */
funcs[2]()
funcs[8]()