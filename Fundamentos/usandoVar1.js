/* Alguns exemplos utilizando e explicando as variáveis 
 * VAR. 
 * As variáveis com VAR tem dois niveis, Global ou dentro de uma função.
 * vou exemplificar isso
 */


// Nivel global 
{
    {
        {
         var teste = "Olá Mundo"
         console.log(teste)
        }
    }
}

// As variáveis declaradas com VAR, podem ser vistas fora do escopo ou bloco da qual foram criadas.
// Nesse caso, seria possível chamar var fora dos blocos acima.
console.log(teste) // Assim.

// esta regra não se aplica caso a var esteja dentro de uma função.
// se estiver dentro de função, ela só é vista a partir do escopo em que fora escrita.

function teste1(){
    var local = 123
    console.log(local)
}

teste1()
//console.log(local) // Nesse caso ele vai retornar um erro.