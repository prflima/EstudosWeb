// Alguns exemplos com arrays.

const testeArray = [9.7, 2.3, 8.3, 7.2]
console.log(testeArray[0], testeArray[3])
console.log(testeArray[4]) // Quando não tem a posição no array, ele retorna undefined

testeArray[4] = 10 // atribuindo um valor numa determinada posição.
console.log(testeArray)

testeArray[6] = 12
console.log(testeArray) // retorna avisando que há uma posição vazia...


//Obs: não é considerado uma boa prática.. apenas estou testando..
testeArray.push({id: 2}, false, null, 'teste') // é possível adicionar diversos valores e tipos diferentes num array.. pois a tipagem é fraca...
console.log(testeArray)

// Apagando dados no array..
console.log(testeArray.pop()) // Apaga o valor da ultima posição do array
delete testeArray[2] 
console.log(testeArray)

console.log(typeof testeArray) // Em JavaScript os array são considerados do tipo "Object"