// Comparaciones

// COmparacion Igualdad+

if( 5 == 5){
    console.log("5 es igual 5");
}


if( 5 === 5){
    console.log("5 es muy igual 5");
}

let a = 5;
let b = 5;

// == Solo comapra el valore
if(a == b){
    console.log("a es igual a b - débil")
}

// Compara el valor y el tipo

if(a == b){
    console.log("a es igual a b - fuerte")
}


let c = 4;
let d = 10;

if(c == d){
    console.log("c es diferente a d - Débil")
}

if( c !== d){
    console.log("c es diferente a d - Fuerte")
}

// Comparaciones mayor q y menor q
let max = 10;
let min = 5;

if( max > min){
    console.log("Max es mayor que min");
}

if(max >= 10){
    console.log("Max es mayor o igual que min")
}

if(min < max){
    console.log("min es menor que max ")
}
