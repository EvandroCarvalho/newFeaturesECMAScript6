//apenas com objetos

var weakMaps = new WeakMap();

var elemento1 = {attr:1};
var elemento2 = {attr:2};

console.log(elemento1);
elemento2 = null;
setTimeout( function() {
    console.log(elemento2)
},3000 );

//delete
//has
//get
//set