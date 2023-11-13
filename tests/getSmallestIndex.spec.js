const { getSmallestIndex } = require('../src/functions');

describe('3 - Crie uma função que retorne o índice do menor valor', () => {
  it('Retorne 5 quando a função getSmallestIndex é chamada com o array [2, 3, 6, 7, 10, 1]', () => {
    const receivedValue = getSmallestIndex([2, 3, 6, 7, 10, 1]);

    expect(receivedValue).toBe(5);
  });

  it('Retorne 6 quando a função getSmallestIndex é chamada com o array [2, 4, 6, 7, 10, 0, -3]', () => {
    const receivedValue = getSmallestIndex([2, 4, 6, 7, 10, 0, -3]);

    expect(receivedValue).toBe(6);
  });
});
