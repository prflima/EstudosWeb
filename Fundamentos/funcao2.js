// Armazenando função em uma variável

const imprimirSoma = function(a, b) {
    console.log(a + b)    
}

imprimirSoma(2, 7)

// Armazenando uma função arrow em uma variável.
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 9))

// retorno implicíto
const subtracao = (a, b) => a - b

console.log(subtracao(2, 5))

// Função com um unico parâmetro e arrow function.
const imprimir = a => console.log(a)
imprimir("Este é mais um fundamento muito importante.")