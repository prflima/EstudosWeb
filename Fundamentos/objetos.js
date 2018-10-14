// A forma como definimos objetos em javascript, é separado por chaves e valores...
/* Ex:
 * const teste = {
 *      nome : 'Paulo'
 *      cpf : 123212
 *      nascimento : 04/01/1996
 * }
 * 
 *IMPORTANTE: É bastante parecido com JSON, porém ambos são coisas diferentes.
 */


const produto1 = {} // Esse processo é interpretado como uma criação de um objeto.
produto1.nome = 'Celular HardCore'
produto1.preco = 999.999
produto1['Desconto legal'] = 0.80 // Evitar atributos com espaço

console.log(produto1)

// Criando objetos de forma literal

const produto2 = {
    nome : 'Polo Hering',
    preco : 89.90
}

console.log(produto2)

// Objeto, dentro de objeto

const produto3 = {
    nome : 'Playstation2',
    preco : 999.99,
    objeto1 : {
        marca : 'Sony',
        objeto2 : {
            texto : 'JavaScript é muito doido'
        }
    }
}
