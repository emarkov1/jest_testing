const Ajax = require('./async');
const axios = require('axios');

jest.mock('axios');

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

describe('axios works', () => {
  let response;
  let todos;
  beforeEach(() => {
    todos = [{ id: 1, title: 'Todo 1', completed: false }];
    response = {
      data: {
        todos,
      },
    };
  });

  test('should return data from backend', () => {
    axios.get.mockReturnValue(response);
    return Ajax.get().then((data) => {
      expect(data.todos).toEqual(todos);
    });
  });
});
