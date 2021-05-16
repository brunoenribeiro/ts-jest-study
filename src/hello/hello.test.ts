import hello from '.';

describe('hello', () => {
  test('hello return expected string', () => {
    expect(hello()).toBe('hello');
  });
})