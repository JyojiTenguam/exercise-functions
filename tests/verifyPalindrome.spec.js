const { verifyPalindrome } = require('../src/functions');

describe('1 - Crie uma função que verifica palíndromos', () => {
  it('Retorne true quando a função verifyPalindrome é chamada com a string \'arara\'', () => {
    const receivedValue = verifyPalindrome('arara');

    expect(receivedValue).toBeTruthy();
  });

  it('Retorne false quando a função verifyPalindrome é chamada com a string \'desenvolvimento\'', () => {
    const receivedValue = verifyPalindrome('desenvolvimento');

    expect(receivedValue).toBeFalsy();
  });
});
