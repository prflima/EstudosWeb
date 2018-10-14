let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
console.log(!isAtivo)

// Situações que se comportam como verdadeiro

console.log("Os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))


// Situações em que se comportam como negativo...

console.log("Os negativos...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("E pra finalizar...")
console.log(!!('' || null || 0 || ' ')) // Procura o primeiro valor verdadeiro...

let nome = ''
console.log(nome || 'Desconhecido') // se o nome estiver vazio(false) retorna 'Desconhecido'
nome = 'Paulo'
console.log(nome || 'Desconhecido')
