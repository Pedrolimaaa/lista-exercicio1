const prompt = require('prompt-sync')();

// Recebe o custo de fábrica do carro
const custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro: "));

// Define os percentuais do distribuidor e dos impostos
const percentualDistribuidor = 28;
const percentualImpostos = 45;

// Calcula o custo final ao consumidor
const custoFinalConsumidor = custoFabrica * (1 + percentualDistribuidor / 100 + percentualImpostos / 100);

// Exibe o resultado
console.log(`Custo final ao consumidor: ${custoFinalConsumidor.toFixed(2)}`);
