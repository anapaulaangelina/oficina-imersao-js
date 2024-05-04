const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');

describe("ValorProjeto", () => {
    test('Deve retornar 396 a partir de pacotes com funcionalidades do plano básico', () => {
        const valorHora = 9; // baseado no salário mínimo

        // pacotes que geram um plano intermediário
        const funcionalidades = [
            "formulario", // 16
            "otimizacao_seo", // 16
            "construcao_1_pagina", // 8
        ]; // Total: 40

        // ## validando
        // 40 -> custo das funcionalidades
        // 9 -> total por hora
        // 1,1 -> taxa de um projeto básico
        const totalDeHorasPorProjeto = 396;  // = 40 * 9 * 1,1

        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(resultado).toEqual(totalDeHorasPorProjeto);
    });

    test('Deve retornar 950 a partir de pacotes com funcionalidades do plano intermediário', () => {
        const valorHora = 9; // baseado no salário mínimo

        // pacotes que geram um plano intermediário
        const funcionalidades = [
            "setup", //8
            "formulario", // 16
            "responsividade", // 16
            "otimizacao_seo", // 16
            "construcao_1_pagina", // 8
            "construcao_1_pagina", // 8
            "integracao_mailchimp" //16
        ]; // Total: 88

        // ## validando
        // 88 -> custo das funcionalidades
        // 9 -> total por hora
        // 1,2 -> taxa de um projeto intermediário
        const totalDeHorasPorProjeto = 950;  // = 88 * 9 * 1,2

        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(resultado).toEqual(totalDeHorasPorProjeto);
    });

    test('Deve retornar 2160 a partir de pacotes com funcionalidades do plano premium', () => {
        const valorHora = 12;

        // pacotes que geram um plano intermediário
        const funcionalidades = [
            "setup", //8
            "formulario", // 16
            "responsividade", // 16
            "otimizacao_seo", // 16
            "construcao_1_pagina", // 8
            "construcao_1_pagina", // 8
            "construcao_1_pagina", // 8
            "integracao_mailchimp", // 16
            "ssr", // 8
            "integracao_api_propria" // 16
        ]; // Total: 120

        // ## validando
        // 120 -> custo das funcionalidades
        // 12 -> total por hora
        // 1,5 -> taxa de um projeto premium
        const totalDeHorasPorProjeto = 2160;  // = 120 * 12 * 1,5

        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(resultado).toEqual(totalDeHorasPorProjeto);
    });
});