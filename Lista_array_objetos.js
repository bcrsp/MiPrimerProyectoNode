//Listas, array 
const lista = [1, "hola", true];
const lista2 = new Array(1, "hola", true);
const lista3 = new Array(3);
lista3[0] = "Soy el index 0";
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// Objetos
const movil = {
    altura: 12,
    anchura: 5,
    marca: "xiaomi",
    isWhite: false,
    contactos: ["brandon", "jor"],
    tarjeta: {
        marca: "sandisk",
        almacenamiento: 32
    }
}
movil.anyo = 2018;

console.log(movil.anyo);
console.log(movil);
console.log(JSON.stringify(movil))

// Fechas
// Librerias  de apoyo moment.js
const now = new Date();
console.log(now);

const fecha_milis = new Date(10) //utilizando los milisegundos
console.log(fecha_milis)

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022,0,15);
console.log(fecha_valores)

const day = now.getDate();
const month = now.getMonth() + 1;
const anyo = now.getFullYear();
console.log(day, month, anyo)
