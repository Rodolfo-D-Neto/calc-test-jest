const calc = require('./calculadora');

test('Soma de 1 + 2 deve ser 3', () => {
  expect(calc.soma(1, 2)).toBe(3);
});

test('Subtração de 5 - 3 deve ser 2', () => {
    expect(calc.subt(5, 3)).toBe(2);
  });

  test('Subtração de 6 - 3 deve ser 3', () => {
    expect(calc.subt(6, 3)).toBe(3); // Não agrega na cobertura, pois já foi testado anteriormente
  });

  test('Dividir 6 / 3 deve ser 2', () => {
    expect(calc.div(6, 3)).toBe(2);
  });

  test('Multiplicar 6 * 3 deve ser 18', () => {
    expect(calc.mult(6, 3)).toBe(18);
  });

