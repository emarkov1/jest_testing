const Ajax = require('./async');

describe('Ajax : echo', () => {
  test('should return value async', async () => {
    const res = await Ajax.echo('some data');
    expect(res).toBe('some data');
  });

  test('should return value with Promise', () => {
    return Ajax.echo('some data').then((data) => {
      expect(data).toBe('some data');
    });
  });
  test('should catch error with Promise', () => {
    return Ajax.echo().catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });
  });

  test('should catch error with async', async () => {
    try {
      await Ajax.echo();
    } catch (err) {
      expect(err.message).toBe('error');
    }
  });
});
