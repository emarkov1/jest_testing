const { sum } = require('./intro');

test('Sum should be sum of two values', () => {
  expect(sum(1, 3)).toBe(4);
  expect(sum(2, 3)).toBe(5);
});
