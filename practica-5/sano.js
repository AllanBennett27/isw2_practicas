const DESCUENTO_FRECUENTE = 0.10;
const TASA_IMPUESTO = 0.15;
const MINIMO_ENVIO_GRATIS = 500;
const COSTO_ENVIO = 50;

// Versión refactorizada; el original permanece en enfermo.js.
function calcularSubtotal(productos) {
  return productos.reduce((suma, producto) => suma + producto.precio * producto.cantidad, 0);
}

function procesarVenta(cliente, productos, tipoEntrega) {
  if (!cliente || !Array.isArray(productos) || productos.length === 0) {
    return { error: 'Datos incompletos' };
  }
  const subtotal = calcularSubtotal(productos);
  const descuento = cliente.tipo === 'frecuente' ? subtotal * DESCUENTO_FRECUENTE : 0;
  const base = subtotal - descuento;
  const impuesto = base * TASA_IMPUESTO;
  const envio = calcularEnvio(tipoEntrega, base);
  const total = base + impuesto + envio;
  return crearComprobante(cliente.nombre, subtotal, descuento, impuesto, envio, total);

}
function calcularEnvio(tipoEntrega, base) {
  return tipoEntrega === 'domicilio' && base < MINIMO_ENVIO_GRATIS ? COSTO_ENVIO : 0;
}

function crearComprobante(nombre, subtotal, descuento, impuesto, envio, total) {
  return {
    cliente: nombre,
    subtotal: subtotal,
    descuento: descuento,
    impuesto: impuesto,
    envio: envio,
    total: Number(total.toFixed(2)),
    mensaje: 'Venta para ' + nombre + ': L ' + total.toFixed(2)
  };
}

module.exports = { procesarVenta };
