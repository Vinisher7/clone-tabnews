const calculadora = require("../models/calculadora.js");

test("Função de somar recebendo 2 + 2 deveria retornar 4", () => {
  expect(calculadora.somar(2, 2)).toBe(4);
});

test("Função de somar recebendo 1000 + 456 deveria retornar 1456", () => {
  expect(calculadora.somar(1000, 456)).toBe(1456);
});

test("Função de somar recebendo 'banana' + 456 deveria retornar 'Erro'", () => {
  expect(calculadora.somar("banana", 456)).toBe("Erro");
});
