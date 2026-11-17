# Diagnóstico de la clínica de código

Dominio: ventas de una pulpería. La función original tiene 40 líneas (sin comentario ni exportación), con problemas introducidos deliberadamente. Se conservó el contrato observable: descuentos, impuestos, envío, redondeo, mensajes y errores.

## Referencias de principios

La imagen solo identifica explícitamente el **principio 6: pruebas antes de refactorizar**. No incluye el catálogo numerado de M1/M3. Por eso los números L1–L5 siguientes son referencias locales, **no la numeración oficial del curso**. Deben sustituirse por los números del material de clase antes de entregar si el docente exige esa correspondencia.

- L1: nombres que expresan intención.
- L2: evitar números mágicos.
- L3: simplicidad y mínima anidación.
- L4: funciones pequeñas y cohesivas.
- L5: responsabilidad única (SRP, S de SOLID).
- 6 (confirmado por el enunciado): establecer tests antes del refactor.

| Problema sembrado | Principio | Refactor aplicado | Paso |
|---|---|---|---|
| Variables c, p, t, s, d, im, e | L1 | Renombrar por cliente, productos, impuesto, envío, etc. | 1 |
| Literales 0.10, 0.15, 500 y 50 | L2 | Extraer constantes descriptivas | 2 |
| Validación envuelve toda la función | L3 | Retorno temprano para datos incompletos | 3 |
| Función larga con suma del carrito incorporada | L4 | Extraer calcularSubtotal | 4 |
| Cálculo y formato de comprobante mezclados | L5 (SRP) | Extraer crearComprobante | 5 |
| Condiciones anidadas y asignaciones redundantes de envío | L3 y L4 | Extraer calcularEnvio; eliminar ramas redundantes | 6 |
| Riesgo de cambiar comportamiento al limpiar código | 6 | Registrar 15 casos antes del primer refactor y ejecutarlos en cada paso | Previo y todos |

## Resultado y alcance

Cada paso pasa 30 comprobaciones: 15 sobre enfermo.js y las mismas 15 sobre sano.js. Las pruebas también verifican que las entradas no sean modificadas. El primer commit de tests ejecuta 15 casos sobre la versión original antes de crear sano.js.

No se agregaron validaciones nuevas para precios negativos o propiedades faltantes: hacerlo sería un cambio funcional separado. El SRP se mejora con funciones cohesivas; no se afirma aplicar todos los principios SOLID ni se agregan clases innecesarias.

El mini-runner es autónomo porque no se proporcionó el código de P4. Los casos pueden migrarse al runner de P4 conservando sus entradas y resultados esperados.
