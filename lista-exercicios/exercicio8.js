const prompt = require('prompt-sync')();

// Recebe o raio da caixa d'água
const raio = parseFloat(prompt("Digite o raio da caixa d'água: "));

// Recebe a altura da caixa d'água
const altura = parseFloat(prompt("Digite a altura da caixa d'água: "));

// Calcula o volume da caixa d'água cilíndrica
const volumeCaixaAgua = Math.PI * Math.pow(raio, 2) * altura;

// Exibe o resultado
console.log(`Volume da caixa d'água: ${volumeCaixaAgua.toFixed(2)}`);
