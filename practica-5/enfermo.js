// Código enfermo deliberado: conservar como referencia del comportamiento inicial.
function procesarVenta(c, p, t) {
  var r = {};
  if (c && Array.isArray(p) && p.length > 0) {
    var s = 0;
    for (var i = 0; i < p.length; i++) {
      s = s + p[i].precio * p[i].cantidad;
    }
    var d = 0;
    if (c.tipo === 'frecuente') {
      d = s * 0.10;
    } else {
      d = 0;
    }
    var b = s - d;
    var im = b * 0.15;
    var e = 0;
    if (t === 'domicilio') {
      if (b < 500) {
        e = 50;
      } else {
        e = 0;
      }
    } else {
      e = 0;
    }
    var total = b + im + e;
    r = {
      cliente: c.nombre,
      subtotal: s,
      descuento: d,
      impuesto: im,
      envio: e,
      total: Number(total.toFixed(2)),
      mensaje: 'Venta para ' + c.nombre + ': L ' + total.toFixed(2)
    };
  } else {
    r = { error: 'Datos incompletos' };
  }
  return r;
}
module.exports = { procesarVenta };
