/*
    Faça um programa que receba N (quantidade de números) e seus respectivos valores.
    Imprima o maior número par e o  menor número impar.


    Exemplo
        Entrada:
            [5, 3, 4, 1, 10, 8]
        
        Saída
            Maior número par : 10.
            Menor numero ímpar : 1.

*/


const { gets, print } = require('./funcoes_aux_ex2');


(function main() {
    const quantidadeDeNumeros = gets();
    let maiorPar = 0;
    let menorImpar = 0;

    for (let i = 0; i < quantidadeDeNumeros; i++) {
        const numeros = gets();
        if (i == 0) {
            maiorPar = numeros;
            menorImpar = numeros;
        } else if (numeros % 2 == 0 && numeros > maiorPar) {
            maiorPar = numeros;
        } else if (numeros % 2 != 0 && numeros < menorImpar) {
            menorImpar = numeros;
        }
    }

    print(`Maior número par : ${maiorPar}`);
    print(`Menor número Impar: ${menorImpar}`);

})();