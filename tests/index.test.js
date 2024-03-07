// tests/index.test.js
const { soma, multiplicacao, divisao, subtracao } = require('../src/index');

// Testes existentes para soma...
test('soma 1 + 2 para igualar 3', () => {
  expect(soma(1, 2)).toBe(3);
});

// Novos testes para multiplicacao
test('multiplicacao 3 * 4 para igualar 12', () => {
  expect(multiplicacao(3, 4)).toBe(12);
});

// Novos testes para divisao
test('divisao 10 / 2 resulta em 5', () => {
  expect(divisao(10, 2)).toBe(5);
});

// Novos testes para subtracao
test('subtracao 10 - 5 resulta em 5', () => {
  expect(subtracao(10, 5)).toBe(5);
});