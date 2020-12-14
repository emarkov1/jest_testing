const { sum, nativeNull } = require('./intro');

describe('Sum function', () => {
  test('should be sum of two values', () => {
    expect(sum(1, 3)).toBe(4);
    expect(sum(2, 3)).toBe(5);
  });

  test('Should return proper values in compare to other numbers', () => {
    expect(sum(1, 3)).toBeGreaterThan(2);
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
    expect(sum(2, 3)).toBeLessThanOrEqual(5);
    expect(sum(2, 3)).toBeLessThan(7);
  });

  test('Should return float sum', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe('Native null function', () => {
  test('Native null Should return false value null', () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy();
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});
