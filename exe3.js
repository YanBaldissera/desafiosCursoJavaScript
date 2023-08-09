
/*
    Faça um programa que calcule e imprima o salário a ser trasnferido para um
    funcionário.
    Para realizar o calculo receba o valor bruto do sálario e o adicional dos beneficios
    O salário a ser trasnferido é calculado da seguinte maneira:

    Valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos beneficios

    Para calcular o percentual de imposto segue as aliquotas:

    De R$0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a R$ 2500.00 = 10.00%
    Maior que R$2500.00 = 15.00%

    Exemplo:
        Entrada:
            2000
            250

        Saída:
            2050.00
*/



(function main() {
    const { gets, print } = require('./funcoes_aux_ex3');


    const salaraioBruto = gets();
    const beneficios = gets();

    function calculoPorcentagem(salario, percentual) {
        return salarioLiquido = salario - (salario * percentual / 100);
    }

    function VerificacaoPorcentagem(salario) {
        if (salario >= 0.00 && salario < 1100.00) {
            return 5;
        } else if (salario > 1100.01 && salario < 2500.00) {
            return 10;
        } else {
            return 15;
        }
    }

    const porcentagem = VerificacaoPorcentagem(salaraioBruto);
    const SalarioComDesconto = calculoPorcentagem(salaraioBruto, porcentagem);
    const valorTotalSalario = SalarioComDesconto + beneficios;
    print(`O valor a ser recebido é R$ ${valorTotalSalario}`);

}());



