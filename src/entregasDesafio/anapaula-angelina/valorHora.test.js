const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe("Calcular valor/hora", () => {
    test('Dado o salário de 1412, deve retornar 9 por hora', () => {
        const rendaMensal = 1412;

        const resultado = calcularValorPorHora(rendaMensal);

        expect(resultado).toEqual(9);
    });
})