const soma = require('./soma');

test('Soma de 1 + 2 deve ser 3', () => {
  expect(soma(1, 2)).toBe(3);
});

  it('Deve somar 4 + 4 com resultado 8', () => {
    expect(soma(4, 4)).toBe(8);
  });

  it('Deve somar 200 + 200 e o resultado deve ser 400', () => {
    expect(soma(4, 4)).toBe(8);
  });