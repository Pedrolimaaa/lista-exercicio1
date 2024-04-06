const prompt = require('prompt-sync')();

// Recebe o custo de fábrica do carro
const custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro: "));

// Recebe a porcentagem do distribuidor
const percentualDistribuidor = parseFloat(prompt("Digite a porcentagem do distribuidor: "));

// Recebe a porcentagem de impostos
const percentualImpostos = parseFloat(prompt("Digite a porcentagem de impostos: "));

// Calcula o custo final ao consumidor
const custoFinalConsumidor = custoFabrica * (1 + percentualDistribuidor / 100 + percentualImpostos / 100);

// Exibe o resultado
console.log(`Custo final ao consumidor: ${custoFinalConsumidor.toFixed(2)}`);
