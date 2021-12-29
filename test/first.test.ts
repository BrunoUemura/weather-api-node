import { sum } from '../src/sum';

describe('First test', () => {
  it('should return 4', () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
  });
});
