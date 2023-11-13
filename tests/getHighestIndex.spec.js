const { getHighestIndex } = require('../src/functions');

describe('2 - Crie uma função que retorne o índice do maior valor', () => {
  it('Retorne 4 quando a função getHighestIndex é chamada com o array [2, 3, 6, 7, 10, 1]', () => {
    const receivedValue = getHighestIndex([2, 3, 6, 7, 10, 1]);

    expect(receivedValue).toBe(4);
  });

  it('Retorne 0 quando a função getHighestIndex é chamada com o array [9, 1, 3, 5, 7]', () => {
    const receivedValue = getHighestIndex([9, 1, 3, 5, 7]);

    expect(receivedValue).toBe(0);
  });

  it('Retorne 1 quando a função getHighestIndex é chamada com o array [-9, -1, -3, -5, -7]', () => {
    const receivedValue = getHighestIndex([-9, -1, -3, -5, -7]);

    expect(receivedValue).toBe(1);
  });
});
