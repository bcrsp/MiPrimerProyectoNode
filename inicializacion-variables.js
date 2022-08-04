
const constantes = 'hola soy una constante';


var a = 1;


let b = 1;
console.log(b)

b= 4;
console.log(b)

// Diferencia entre let y var
// LET -> Solo afecta al bloque el cual se está utlizando
// VAR -> independintemnte en el bloque en el que se esté reasignando el valor se ve afectado


var variableVar = "Soy una variable VAr"

for(var i= 0 ; i< 3 ; i++){
    var variableVar = "Soy una variable var midificada"
}
console.log(variableVar);


let  variableLet = "Soy una variable LET"

for(var i= 0 ; i< 3 ; i++){
    let variableLet = "Soy una variable let midificada"
}
console.log(variableLet);

console.log( typeof 2)