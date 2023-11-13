const { getLongestWord } = require('../src/functions');

describe('4 - Crie uma função que retorna a maior palavra', () => {
  it('Retorne \'Fernanda\' quando a função getLongestWord é chamada com o array [\'José\', \'Lucas\', \'Nádia\', \'Fernanda\', \'Cairo\', \'Joana\']', () => {
    const namesList = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

    const receivedResult = getLongestWord(namesList);
    const expectedResult = 'Fernanda';

    expect(receivedResult).toBe(expectedResult);
  });

  it('Retorne \'JavaScript\' quando a função getLongestWord é chamada com o array [\'JavaScript\', \'HTML\', \'CSS\', \'GitHub\', \'Unix\']', () => {
    const techList = ['JavaScript', 'HTML', 'CSS', 'GitHub', 'Unix'];

    const receivedResult = getLongestWord(techList);
    const expectedResult = 'JavaScript';

    expect(receivedResult).toBe(expectedResult);
  });
});
