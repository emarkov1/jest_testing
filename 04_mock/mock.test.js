const { map } = require('./mock');
describe('map function', () => {
  let arr;
  let fn;
  beforeEach(() => {
    arr = [1, 2, 3, 5];
    fn = jest.fn((x) => x ** 2);
  });

  test('should call callback', () => {
    map(arr, fn);
    expect(fn).toBeCalled();
  });
});
