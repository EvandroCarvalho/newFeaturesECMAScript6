


// arguments

 function somaTudo() {
     var soma = 0;
     for ( var i = 0; i < arguments.length; i++ ) {
         soma += arguments[i]
     }
     console.log(soma)
 }

 somaTudo(1);
 somaTudo(1,2);
 somaTudo(1,2,3);

 //Usando operador Rest 
 // converte as entradas para uma array (usando reduce e arrow function) 
function somaTudoRest(...valores) {
    return valores.reduce( (soma, valor) => {
        return soma += valor
    },0 )
}

console.log(somaTudoRest(1));
console.log(somaTudoRest(1,2));
console.log(somaTudoRest(1,2,3));