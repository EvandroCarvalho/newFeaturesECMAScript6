let arr = ['Evandro', 'Vieira', 'Carvalho', 'Junior']

console.log(arr.join(' e '))
console.log(arr.reverse())
console.log(arr.sort())

let arr2 = [ 'Evandro', 'Leticia' ]

console.log([...arr2, 'Filho'].join(' e ') )

let arr3 = {nome: 'Evandro', filho: 'Joao'}

console.log({...arr3, nome: 'Leticia'})


arr.unshift(2) // add no inicio
arr.shift() // remove do inicio

//para todos os casos a "remoção" ou "adição" começa no primeiro indice indicado
arr.slice(1,2) //gera um novo arry com base nos indices, não modificando o primeiro
arr.splice(1,2) // gera um novo array no base nos indices modificando o primeiro
arr.splice(1,0,'string') // add o string a posição 1. o 0 indica que não será renovido nenhum elemento



arr.forEach( function(item, indice, arr) {
    console.log(item, indice, arr)
} )

let numeros = [1,2,3,4,5]
let result = numeros.every( (item) => { //every retorna false se uma variavel do array esta fora da condição
    return item < 2                     // pelo menos um item ser false
})
console.log(result)

let result = numeros.some( item => { // some retorna true case uma variavel do array se encaixe na condição
    return item < 2                 // pelo menos um item true
} )
