const Lodash = require('./sync');

describe('Lodash : compact', () => {
  let _ = new Lodash();
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
