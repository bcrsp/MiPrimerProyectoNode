// Bifurcaciones if.. else
let nota = 5;

if (nota === 5) {
  console.log("Has aprobado");
} else if (nota === 4) {
  console.log("casi apruebas");
} else if (nota === 3) {
  console.log("Esfurzat eun poco mas");
} else if (nota === 2) {
  console.log("Tines que studiar mas");
} else if (nota === 1) {
  console.log("No has estudiado");
}

switch (nota) {
  case 5:
    console.log("Has aprobado");
    break;
  case 4:
    console.log("casi apruebas");
    break;
  case 3:
    console.log("Esfurzat eun poco mas");
    break;
  case 2:
    console.log("Tines que studiar mas");
    break;
  case 1:
    console.log("No has estudiado");
    break;
  default:
    console.log("Error");
    break;
}
