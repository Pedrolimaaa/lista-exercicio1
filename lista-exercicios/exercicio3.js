const prompt = require('prompt-sync')();

// Recebe o salário mensal atual do funcionário
const salarioAtual = parseFloat(prompt("Digite o salário mensal atual do funcionário: "));

// Recebe o percentual de reajuste
const percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste: "));

// Calcula o novo salário
const novoSalario = salarioAtual * (1 + percentualReajuste / 100);

// Exibe o resultado
console.log(`Novo salário: ${novoSalario.toFixed(2)}`);
