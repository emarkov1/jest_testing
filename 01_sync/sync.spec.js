const Lodash = require('./sync');
let _ = new Lodash();

describe('Lodash : compact', () => {
  let array;

  beforeEach(() => {
    array = [1, 0, false, undefined, null, true, ''];
  });
  afterAll(() => {
    _ = new Lodash();
  });

  test('should be defined', () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });
  test('compact should remove falsy values', () => {
    const result = [1, true];
    expect(_.compact(array)).toEqual(result);
  });

  test('compact should not contain falsy values', () => {
    expect(_.compact(array)).not.toContain(null);
    expect(_.compact(array)).not.toContain(undefined);
    expect(_.compact(array)).not.toContain('');
    expect(_.compact(array)).not.toContain(0);
    expect(_.compact(array)).not.toContain(false);
  });
});

describe('Lodash : groupBy', () => {
  test('should be defined', () => {
    expect(_.groupBy).toBeDefined();
    expect(_.groupBy).not.toBeUndefined();
  });

  test('group array items by Math.floor', () => {
    const array = [2.2, 4.2, 2.4, 3.1];
    const result = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1],
    };
    expect(_.groupBy(array, Math.floor)).toEqual(result);
  });

  test('group array items by length', () => {
    const array = ['one', 'two', 'three'];
    const result = {
      3: ['one', 'two'],
      5: ['three'],
    };
    expect(_.groupBy(array, 'length')).toEqual(result);
  });
});
