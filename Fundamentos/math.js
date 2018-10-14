// Vou dar um exemplo do math, calculando a area de uma circunferencia.

var raio = 2.8
var area = Math.PI * Math.pow(raio, 2)
/*
 * Usamos o PI (Que é uma constante dentro do objeto Math com o valor de PI(3,14.....))
 * e usamos a função "pow" e passamos dentro do paramêtro"()" ex:(raio, 2)
 * a função "pow" é utilizada para calculos com expoentes.
 * Onde o primeiro paramêtro (no caso do exemplo, raio) é o número da base e (2) o expoente.
 */

 console.log(area.toFixed(2)) // vamos imprimir na tela o valor do calculo, usando a função "toFixed()" para definir as casas decimais
 console.log(typeof Math) // vamos imprimir o que é o Math (Objeto)