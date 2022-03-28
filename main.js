//...b...

let variable1 = 4;
let variable2 = 6;
let variable3 = 9;

let producto = variable1 * variable2 * variable3;
let suma = variable1 + variable2 + variable3;
let promedio = (variable1 + variable2 + variable3) / 3;

console.log("el producto de las 3 variable es de " + producto);
console.log("la suma de las 3  es de " + suma);
console.log("y el promedio de las 3 es de " + promedio);

//...c...

let cocaCola = 10;
let jabon = 14;
let cheetos = 3;
let huevos = 2;
let leche = 4;

let productos = cocaCola + jabon + cheetos + huevos + leche;
let descuentoDeCompra = productos * 0.15;
let totalAPagar = productos - descuentoDeCompra;

console.log("su compra total es de " + productos);
console.log("el descuento aplicado es " + descuentoDeCompra);
console.log("total a pagar con descuento es " + totalAPagar);

//...d...

let pesos = 4600;
let dolares = 210;

let cambioTotal = pesos / dolares;
console.log(`te alcanzan ${cambioTotal} por la cantidad de ${pesos}`);

//...e...

let factura = 7200;
let calcularIva = 0.21;
let sumaDeIva = factura * calcularIva;

console.log(
  "la suma del IVA es " +
    calcularIva +
    "mas la factura de " +
    factura +
    "en total lo que tiene que pagar con IVA es " +
    sumaDeIva
);
