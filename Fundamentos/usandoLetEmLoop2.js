//Outro exemplo de LET em loop..

const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

/* Os números impressos foram 2 e 8.
 * Como a variável criada com LET tem escopo de bloco, quando eu passo o valor de i pra função no array
 * ele consegue gravar o valor de i naquele momento, dentro do array.
 */
funcs[2]()
funcs[8]()