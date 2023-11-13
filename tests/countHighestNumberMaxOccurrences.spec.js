const { countHighestNumberMaxOccurrences } = require('../src/functions');

describe('5 - Crie uma função que calcula o número de repetições do maior número', () => {
  it('Retorne 2 quando o parâmetro passado na funcão countHighestNumberMaxOccurrences seja [1, 9, 2, 3, 9, 5, 7]', () => {
    const receivedValue = countHighestNumberMaxOccurrences([1, 9, 2, 3, 9, 5, 7]);

    expect(receivedValue).toBe(2);
  });

  it('Retorne 1 quando o parâmetro passado na funcão countHighestNumberMaxOccurrences seja [0, 4, 4, 4, 9, 2, 1]', () => {
    const receivedValue = countHighestNumberMaxOccurrences([0, 4, 4, 4, 9, 2, 1]);

    expect(receivedValue).toBe(1);
  });

  it('Retorne 1 quando o parâmetro passado na funcão countHighestNumberMaxOccurrences seja [-2, -2, -1]', () => {
    const receivedValue = countHighestNumberMaxOccurrences([-2, -2, -1]);

    expect(receivedValue).toBe(1);
  });

  it('Retorne 3 quando o parâmetro passado na funcão countHighestNumberMaxOccurrences seja [0, 0, 0]', () => {
    const receivedValue = countHighestNumberMaxOccurrences([0, 0, 0]);

    expect(receivedValue).toBe(3);
  });
});
