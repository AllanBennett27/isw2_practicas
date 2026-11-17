# refactor: completar clínica de código para ventas de pulpería

## Problema y solución

La función original mezcla validación, reglas de venta y presentación, usa nombres poco claros, números mágicos y condiciones anidadas. Se conserva en enfermo.js como referencia. sano.js ofrece el mismo resultado con constantes, nombres claros, retorno temprano y funciones separadas.

## Cambios

Seis commits de refactorización: renombrar, constantes, retorno temprano, subtotal, comprobante y envío. Los tests de caracterización se agregaron antes del primer refactor.

## Validación

`node practica-5/enfermo.test.js`: 30 casos aprobados, cero fallos. Se verifican carrito inválido, descuento, entrega local, domicilio, límites del envío, redondeo, múltiples productos y ausencia de mutaciones. Ver evidencia-tests.txt y el historial Git.

## Pendiente antes de entregar

- Ajustar referencias L1–L5 a la numeración oficial de M1/M3.
- Integrar el runner de P4 si es obligatorio usar exactamente ese archivo.
- Publicar la rama feature/practica-5, abrir este PR y fusionarlo después de revisar.

Este archivo es el texto preparado para el PR; no acredita un PR remoto ni un merge realizado.
