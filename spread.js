//Operador Spread

var args = [0,1,2,3];
console.log(...args);

//Concatenando os itens de listas de forma individual

const listaMae = ['leite','ovos','papel'];
const listaNamorada = ['arroz','feijão','suco'];
const listaEscritorio = ['papel a4','caneta','clips de papel'];

const listaCompas = [...listaMae, ...listaNamorada, ...listaEscritorio];

console.log(listaCompas);