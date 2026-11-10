# Práctica 4 — Calculadora de fiados

Requisito: Node.js. Sin frameworks ni dependencias externas.

Copie esta carpeta dentro de `isw2-practicas`. Para ejecutar desde la raíz:

```bash
node practica-4/fiados.test.js
```

Incluye `fiados.js`, `fiados.test.js` con 9 tests AAA, `evidencia.md`, `evidencia.png`, la salida de los tests y una versión inicial RED en `tdd`.

## Registrar el ejercicio en Git

Los comandos siguientes se ejecutan desde la raíz de su repositorio. La rama debe ser nueva y el árbol de trabajo debe estar listo para el ejercicio.

1. Cree la rama:

```bash
git switch -c feature/practica-4
```

2. Guarde temporalmente la versión final de `practica-4/fiados.js` fuera del repositorio. Copie el contenido de `practica-4/tdd/fiados.red.js` a `practica-4/fiados.js`. Ejecute los tests: deben fallar las validaciones. Registre ese estado:

```bash
node practica-4/fiados.test.js
git add practica-4/fiados.js practica-4/fiados.test.js
git commit -m "test(fiados): red - monto negativo y dias no numericos"
```

3. Restaure la versión final de `fiados.js` que guardó. Ejecute y registre GREEN:

```bash
node practica-4/fiados.test.js
git add practica-4
git commit -m "feat(fiados): green - validar entradas y calcular mora"
git push -u origin feature/practica-4
```

4. Abra el PR en GitHub hacia la rama principal y haga el merge después de revisarlo. Si necesita conservar los commits RED y GREEN, use merge normal y evite squash.

La guía permite reproducir el ciclo. Los commits, PR y merge no se han realizado por medio de este ZIP. Para una captura de su propia terminal, ejecute los tests, tome la captura y sustituya `evidencia.png`.
