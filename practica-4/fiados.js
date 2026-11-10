/** Devuelve una mora fija del 5% si hay dias vencidos; de lo contrario, 0. */
function calcularMora(monto, diasVencidos) {
  if (typeof monto !== 'number' || !Number.isFinite(monto)) {
    throw new Error('El monto debe ser un numero finito');
  }
  if (monto < 0) {
    throw new Error('El monto no puede ser negativo');
  }
  if (typeof diasVencidos !== 'number' || !Number.isFinite(diasVencidos)) {
    throw new Error('Los dias deben ser un numero finito');
  }
  return diasVencidos > 0 ? monto * 0.05 : 0;
}
module.exports = { calcularMora };
