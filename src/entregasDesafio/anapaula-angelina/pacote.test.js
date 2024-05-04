const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe("Pacote", () => {
    test('Deve retornar pacote_basico quando o totalHorasProjeto for menor que 50', () => {
        const totalHorasPorProjeto = 40;

        const resultado = calcularPacote(totalHorasPorProjeto);

        expect(resultado).toEqual("pacote_basico");
    });

    test('Deve retornar pacote_intermediario quando o totalHorasProjeto for menor que 100 e maior ou igual a 50', () => {
        const totalHorasPorProjeto = 90;

        const resultado = calcularPacote(totalHorasPorProjeto);

        expect(resultado).toEqual("pacote_intermediario");

        const totalHorasPorProjeto2 = 50;

        const resultado2 = calcularPacote(totalHorasPorProjeto2);

        expect(resultado2).toEqual("pacote_intermediario");
    });

    test('Deve retornar pacote_premium quando o totalHorasProjeto for menor que 200 e maior ou igual a 100', () => {
        const totalHorasPorProjeto = 190;

        const resultado = calcularPacote(totalHorasPorProjeto);

        expect(resultado).toEqual("pacote_premium");

        const totalHorasPorProjeto2 = 100;

        const resultado2 = calcularPacote(totalHorasPorProjeto2);

        expect(resultado).toEqual("pacote_premium");
    });
});