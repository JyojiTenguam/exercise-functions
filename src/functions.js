// Requisito 1 - Crie a função verifyPalindrome
function verifyPalindrome(str) {
  // Remover espaços e tornar minúsculas todas as letras
  const cleanedStr = str.toLowerCase().replace(/\s/g, '');

  // Comparar a string original com a string invertida
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Requisito 2 - Crie a função getHighestIndex

// Requisito 3 - Crie a função getSmallestIndex

// Requisito 4 - Crie a função getLongestWord

// Requisito 5 - Crie a função countHighestNumberMaxOccurrences

// Não modifique as linhas abaixo
module.exports = {
  verifyPalindrome: typeof verifyPalindrome === 'function' ? verifyPalindrome : (() => {}),
  getHighestIndex: typeof getHighestIndex === 'function' ? getHighestIndex : (() => {}),
  getSmallestIndex: typeof getSmallestIndex === 'function' ? getSmallestIndex : (() => {}),
  getLongestWord: typeof getLongestWord === 'function' ? getLongestWord : (() => {}),
  countHighestNumberMaxOccurrences: typeof countHighestNumberMaxOccurrences === 'function'
    ? countHighestNumberMaxOccurrences
    : (() => {}),
};
