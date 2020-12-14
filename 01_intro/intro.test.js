const { sum } = require('./intro');

test('Sum should be sum of two values', () => {
  expect(sum(1, 3)).toBe(4);
  expect(sum(2, 3)).toBe(5);
});

test('Should return proper values in compare to other numbers', () => {
  expect(sum(1, 3)).toBeGreaterThan(2);
  expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
  expect(sum(2, 3)).toBeLessThanOrEqual(5);
  expect(sum(2, 3)).toBeLessThan(7);
});
