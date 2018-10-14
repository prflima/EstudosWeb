// Alguns cuidados que devemos tomar com o numbers.

// No exemplo abaixo, qualquer número dividido por 0 não gera erro, mas retorna um valor "Infinity"
console.log(18 / 0)

/*
 * Você pode fazer operações matematicas, embora não seja uma boa prática,
 * com valores em "string" desde que dentro contenham números e ele irá 
 * fazer a operação matemática. 
 */
console.log("10" * 2)

console.log("10" + 2) // Nesse caso, ele não vai somar, pois o sinal de "+" em string serve pra concatenar, retornando 102

// Porém só funciona caso seja números.
console.log("Show!" * 2) // Nesse caso ele retorna NaN

// Temos também algumas imprecisões em determinados calculos de ponto flutuante.
console.log(0.1 + 0.7) // Nesse caso ele retorna 0.799999, e não 0.8 como se espera, devido ao tempo de processo para chegar ao numero preciso

// console.log(10.toString()) não conseguimos chamar uma função dentro de um valor literal.
console.log((10.2133).toFixed()) // Porém é possível chamar função dentro de um literal, caso este esteja entre parênteses