const prompt = require('prompt-sync')(); // Importa a biblioteca prompt-sync

// Recebe o número total de eleitores
const totalEleitores = parseInt(prompt("Digite o número total de eleitores: "));

// Recebe o número de votos brancos, nulos e válidos
const votosBrancos = parseInt(prompt("Digite o número de votos brancos: "));
const votosNulos = parseInt(prompt("Digite o número de votos nulos: "));
const votosValidos = parseInt(prompt("Digite o número de votos válidos: "));

// Calcula os percentuais
const percentualBrancos = (votosBrancos / totalEleitores) * 100;
const percentualNulos = (votosNulos / totalEleitores) * 100;
const percentualValidos = (votosValidos / totalEleitores) * 100;

// Exibe os resultados
console.log(`Percentual de votos brancos: ${percentualBrancos.toFixed(2)}%`);
console.log(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`);
console.log(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`);
