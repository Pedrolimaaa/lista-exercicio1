const prompt = require('prompt-sync')();

// Recebe as duas notas do aluno
const nota1 = parseFloat(prompt("Digite a primeira nota: "));
const nota2 = parseFloat(prompt("Digite a segunda nota: "));

// Define os pesos das notas
const pesoNota1 = 4;
const pesoNota2 = 6;

// Calcula a média ponderada
const mediaPonderada = (nota1 * pesoNota1 + nota2 * pesoNota2) / (pesoNota1 + pesoNota2);

// Exibe o resultado
console.log(`Média final do aluno: ${mediaPonderada.toFixed(2)}`);
