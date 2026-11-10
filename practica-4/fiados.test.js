const { calcularMora } = require('./fiados');
let aprobadas = 0, fallidas = 0;
function assertEqual(actual, esperado) {
  if (!Object.is(actual, esperado)) {
    throw new Error(`Esperado: ${esperado}; recibido: ${actual}`);
  }
}
function test(nombre, fn) {
  try {
    fn(); aprobadas++;
    console.log(`PASS: ${nombre}`);
  } catch (error) {
    fallidas++; console.log(`FAIL: ${nombre} -> ${error.message}`);
  }
}
function obtenerError(fn) {
  try { fn(); return null; } catch (error) { return error.message; }
}

// Estas dos pruebas se escribieron antes de agregar las validaciones.
test('rechaza un monto negativo', () => {
  // Arrange
  const monto = -100, dias = 3;
  // Act
  const actual = obtenerError(() => calcularMora(monto, dias));
  // Assert
  assertEqual(actual, 'El monto no puede ser negativo');
});
test('rechaza dias que no son un numero', () => {
  // Arrange
  const monto = 100, dias = 'tres';
  // Act
  const actual = obtenerError(() => calcularMora(monto, dias));
  // Assert
  assertEqual(actual, 'Los dias deben ser un numero finito');
});
test('cobra el 5% cuando hay vencimiento', () => {
  // Arrange
  const monto = 1000, dias = 5;
  // Act
  const actual = calcularMora(monto, dias);
  // Assert
  assertEqual(actual, 50);
});
test('no cobra mora con cero dias', () => {
  // Arrange
  const monto = 1000, dias = 0;
  // Act
  const actual = calcularMora(monto, dias);
  // Assert
  assertEqual(actual, 0);
});
test('no cobra mora antes del vencimiento', () => {
  // Arrange
  const monto = 1000, dias = -2;
  // Act
  const actual = calcularMora(monto, dias);
  // Assert
  assertEqual(actual, 0);
});
test('monto cero produce mora cero', () => {
  // Arrange
  const monto = 0, dias = 10;
  // Act
  const actual = calcularMora(monto, dias);
  // Assert
  assertEqual(actual, 0);
});
test('un dia vencido ya cobra el 5%', () => {
  // Arrange
  const monto = 200, dias = 1;
  // Act
  const actual = calcularMora(monto, dias);
  // Assert
  assertEqual(actual, 10);
});
test('la mora no se multiplica por los dias', () => {
  // Arrange
  const monto = 200, dias = 30;
  // Act
  const actual = calcularMora(monto, dias);
  // Assert
  assertEqual(actual, 10);
});
test('rechaza NaN en los dias', () => {
  // Arrange
  const monto = 100, dias = NaN;
  // Act
  const actual = obtenerError(() => calcularMora(monto, dias));
  // Assert
  assertEqual(actual, 'Los dias deben ser un numero finito');
});
console.log(`\nResultado: ${aprobadas} aprobadas, ${fallidas} fallidas.`);
if (fallidas > 0) process.exitCode = 1;
