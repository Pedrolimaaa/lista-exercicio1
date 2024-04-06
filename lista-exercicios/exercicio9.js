const prompt = require('prompt-sync')();

// Recebe o primeiro número
const num1 = parseFloat(prompt("Digite o primeiro número: "));

// Recebe o segundo número
const num2 = parseFloat(prompt("Digite o segundo número: "));

// Calcula a soma dos dois números
const soma = num1 + num2;

// Calcula o resultado da multiplicação
const resultadoMultiplicacao = soma * num1;

// Exibe o resultado
console.log(`Resultado da soma e multiplicação: ${resultadoMultiplicacao.toFixed(2)}`);
