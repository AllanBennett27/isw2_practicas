const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
// Mini-runner autónomo; sustituible por el de P4 si el docente lo exige.
const versiones = ['enfermo.js', 'sano.js'].filter(nombre =>
  fs.existsSync(path.join(__dirname, nombre)));
let aprobados = 0;
let fallidos = 0;
const normal = { nombre: 'Ana', tipo: 'normal' };
const frecuente = { nombre: 'Luis', tipo: 'frecuente' };
const producto = (precio, cantidad = 1) => [{ precio, cantidad }];
function esperado(cliente, subtotal, descuento, impuesto, envio, total) {
  return { cliente, subtotal, descuento, impuesto, envio, total,
    mensaje: `Venta para ${cliente}: L ${total.toFixed(2)}` };
}
const casos = [
  ['cliente ausente', [null, producto(100), 'local'], { error: 'Datos incompletos' }],
  ['productos ausentes', [normal, undefined, 'local'], { error: 'Datos incompletos' }],
  ['productos no son arreglo', [normal, {}, 'local'], { error: 'Datos incompletos' }],
  ['carrito vacío', [normal, [], 'local'], { error: 'Datos incompletos' }],
  ['venta normal', [normal, producto(100, 2), 'local'], esperado('Ana', 200, 0, 30, 0, 230)],
  ['cliente frecuente', [frecuente, producto(200), 'local'], esperado('Luis', 200, 20, 27, 0, 207)],
  ['envío con costo', [normal, producto(100), 'domicilio'], esperado('Ana', 100, 0, 15, 50, 165)],
  ['límite envío gratuito', [normal, producto(500), 'domicilio'], esperado('Ana', 500, 0, 75, 0, 575)],
  ['por debajo del límite', [normal, producto(499), 'domicilio'], esperado('Ana', 499, 0, 74.85, 50, 623.85)],
  ['por encima del límite', [normal, producto(600), 'domicilio'], esperado('Ana', 600, 0, 90, 0, 690)],
  ['envío después del descuento', [frecuente, producto(500), 'domicilio'], esperado('Luis', 500, 50, 67.5, 50, 567.5)],
  ['varios productos', [normal, [{ precio: 100, cantidad: 2 }, { precio: 50, cantidad: 3 }], 'local'], esperado('Ana', 350, 0, 52.5, 0, 402.5)],
  ['redondeo', [normal, producto(10.01), 'local'], esperado('Ana', 10.01, 0, 10.01 * 0.15, 0, 11.51)],
  ['tipo desconocido conserva comportamiento', [{ nombre: 'Ana', tipo: 'otro' }, producto(100), 'otro'], esperado('Ana', 100, 0, 15, 0, 115)],
  ['cantidad cero', [normal, producto(100, 0), 'local'], esperado('Ana', 0, 0, 0, 0, 0)],
];
for (const archivo of versiones) {
  const { procesarVenta } = require('./' + archivo);
  for (const [nombre, args, salida] of casos) {
    try {
      const antes = structuredClone(args);
      assert.deepStrictEqual(procesarVenta(...args), salida);
      assert.deepStrictEqual(args, antes, 'No debe modificar las entradas');
      aprobados++;
      console.log(`OK ${archivo}: ${nombre}`);
    } catch (error) {
      fallidos++;
      console.error(`FAIL ${archivo}: ${nombre} - ${error.message}`);
    }
  }
}
console.log(`${aprobados} aprobados; ${fallidos} fallidos`);
process.exitCode = fallidos ? 1 : 0;
