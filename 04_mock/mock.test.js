const { map } = require('./mock');
describe('map function', () => {
  let arr;
  let fn;
  beforeEach(() => {
    arr = [1, 2, 3, 5];
    fn = jest.fn((x) => x ** 2);
    map(arr, fn);
  });

  test('should call callback', () => {
    expect(fn).toBeCalled();
  });

  test('should call callback 4 times', () => {
    expect(fn).toBeCalledTimes(4);
    expect(fn.mock.calls.length).toBe(4);
  });

  test('should pow each element', () => {
    expect(fn.mock.results[0].value).toBe(1);
    expect(fn.mock.results[1].value).toBe(4);
    expect(fn.mock.results[2].value).toBe(9);
    expect(fn.mock.results[3].value).toBe(25);
  });

  test('should fn work', () => {
    fn.mockReturnValueOnce(100).mockReturnValueOnce(200).mockReturnValue('42');
    expect(fn()).toBe(100);
    expect(fn()).toBe(200);
    expect(fn()).toBe('42');
  });
});
