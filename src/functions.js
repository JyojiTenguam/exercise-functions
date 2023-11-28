// Requisito 1 - Crie a função verifyPalindrome
function verifyPalindrome(str) {
  // Remover espaços e tornar minúsculas todas as letras
  const cleanedStr = str.toLowerCase().replace(/\s/g, '');

  // Comparar a string original com a string invertida
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Requisito 2 - Crie a função getHighestIndex
function getHighestIndex(numbers) {
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
// Requisito 3 - Crie a função getSmallestIndex
function getSmallestIndex(numbers) {
  let numeroMenor = numbers[0];
  let indiceMenor = 0;

  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < numeroMenor) {
      numeroMenor = numbers[index];
      indiceMenor = index;
    }
  }
  return indiceMenor;
}
// Requisito 4 - Crie a função getLongestWord
function getLongestWord(string) {
  let longestWord = string[0];

  for (let index = 1; index < string.length; index += 1) {
    if (string[index].length > longestWord.length) {
      longestWord = string[index];
    }
  }
  return longestWord;
}
// Requisito 5 - Crie a função countHighestNumberMaxOccurrences

// Não modifique as linhas abaixo
module.exports = {
  verifyPalindrome: typeof verifyPalindrome === 'function' ? verifyPalindrome : (() => { }),
  getHighestIndex: typeof getHighestIndex === 'function' ? getHighestIndex : (() => { }),
  getSmallestIndex: typeof getSmallestIndex === 'function' ? getSmallestIndex : (() => { }),
  getLongestWord: typeof getLongestWord === 'function' ? getLongestWord : (() => { }),
  countHighestNumberMaxOccurrences: typeof countHighestNumberMaxOccurrences === 'function'
    ? countHighestNumberMaxOccurrences
    : (() => { }),
};
