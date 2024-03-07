// tests/index.test.js
const { soma, multiplicacao } = require('../src/index');

// Testes existentes para soma...
test('soma 1 + 2 para igualar 3', () => {
  expect(soma(1, 2)).toBe(3);
});

// Novos testes para multiplicacao
test('multiplicacao 3 * 4 para igualar 12', () => {
  expect(multiplicacao(3, 4)).toBe(12);
});