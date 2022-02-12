const soma = require('./soma');

test('Soma de 1 + 2 deve ser 3', () => {
  expect(soma(1, 2)).toBe(3);
});

it('Deve somar 100 + 1 e o resultado deve ser 101', () => {
  expect(soma(100, 1)).toBe(101);
});

it('Não deve somar strings', () => {
  expect(soma(100, '1')).toBe(null);
});
