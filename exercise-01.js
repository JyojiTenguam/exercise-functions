// 1 - Crie uma função que verifica palíndromos
// 2 - Crie uma função que retorne o índice do maior valor
// 3 - Crie uma função que retorne o índice do menor valor
// 4 - Crie uma função que retorna a maior palavra
// 5 - Crie uma função que calcula o número de repetições do maior número

// Resolvendo o exercicio 02
const numbers = [2, 3, 6, 7, 10, 1];

function getHighestIndex() {
  let numeroMaior = numbers[0];
  let indiceMaior = 0;

  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > numeroMaior) {
      numeroMaior = numbers[index];
      indiceMaior = index;
    }
  }
  return indiceMaior;
}

console.log(getHighestIndex());
