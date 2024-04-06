const prompt = require('prompt-sync')();

// Recebe o número de carros vendidos pelo vendedor
const numCarrosVendidos = parseInt(prompt("Digite o número de carros vendidos: "));

// Recebe o valor total de suas vendas
const valorTotalVendas = parseFloat(prompt("Digite o valor total de suas vendas: "));

// Recebe o salário fixo do vendedor
const salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor: "));

// Recebe o valor que ele recebe por carro vendido
const valorPorCarro = parseFloat(prompt("Digite o valor que ele recebe por carro vendido: "));

// Calcula o salário final do vendedor
const salarioFinalVendedor = salarioFixo + (numCarrosVendidos * valorPorCarro) + (0.05 * valorTotalVendas);

// Exibe o resultado
console.log(`Salário final do vendedor: ${salarioFinalVendedor.toFixed(2)}`);
