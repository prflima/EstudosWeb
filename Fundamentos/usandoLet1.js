// Agora vamos ver algumas demonstrações com o LET.

let numero = 1
{
    let numero = 2
    console.log("dentro =", numero)
}

console.log("fora =", numero)

/* Perceba que mesmo com o mesmo nome, o valor delas se manteve após eu imprimir cada um dos resultados.
 * Isso porque a variável criada com LET, só é válida para o escopo local.
 * Sendo assim, o console de fora vai imprimir 1, pois a variavel com o valor 1 está no mesmo escopo.
 * e o de dentro, irá exibir o valor 2, pois a variável se encontra no mesmo bloco do console.
 * 
 * Sendo assim, as diferenças entre VAR e LET:
 * Variáveis criadas com VAR tem escopo global e de função.
 * 
 * Variáveis criada com o LET tem escopo global, de função e de blocos. 
 */