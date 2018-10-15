let numeros = [1,2,3,4,5]

let arrayFilter = numeros.filter( (item, index, array) => { // assim como o map o filter retorna um array, 
    return item < 3                      //filtrado de acordo com a condição
   
})

console.log(arrayFilter)

let reduce = numeros.reduce( function(acumulado, item, indice, numeros) {
    return acumulado + item
}, 0) // 0 é o valor acumulado

console.log(reduce)

let reduce = numeros.reduceRight( function(acumulado, item, indice, numeros) { // faz a redução só que ao contrario
    return acumulado + item
}, 0) // 0 é o valor acumulado

console.log(reduce)
