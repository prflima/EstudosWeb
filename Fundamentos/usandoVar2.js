// Outro exemplo do var, explicando o nivel global.

var numero = 1
{
    var numero = 2
    console.log('Dentro do bloco =', numero)
}
console.log('Fora do bloco =', numero)

// Nesse caso ele vai imprimir 2 vezes o valor 2, pois mesmo dentro do bloco, a variável foi sobrescrita.
// Pois o VAR, ignora os blocos.