// Um exemplo de uma variável declarada com VAR, dentro de um laço...
// Será que ela fica visível fora do laço? Vamos descobrir.

for(var i = 0; i < 10; i++){
    console.log("i =", i)
}

//Perceba que ao mandar imprimir, ela consegue enxergar a variável i, e já com o valor
// Que fez com que o laço parasse, no caso 10, pois 10 é = a 10 e isso fez com que o laço quebrasse.
console.log("fora do laço i =", i)