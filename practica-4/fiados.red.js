// Primera implementación: falta validar los datos de entrada.
function calcularMora(monto, diasVencidos) {
  return diasVencidos > 0 ? monto * 0.05 : 0;
}
module.exports = { calcularMora };
