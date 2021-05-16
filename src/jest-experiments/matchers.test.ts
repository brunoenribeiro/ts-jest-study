describe('matchers', () => {
  test('objects are equal', () => {
    const data = { foo: ['bar', 'baz'] };
    expect(data).toEqual({ foo: ['bar', 'baz'] })
  });

  test('floating point numbers sum', () => {
    const sum = 0.1 + 0.2;
    expect(sum).toBeCloseTo(0.3);
  });

  test('iterable contains item', () => {
    const list = ['foo', 'bar'];
    expect(list).toContain('foo');
    expect(new Set(list)).toContain('foo');
  });

  test('throwing errors', () => {
    const alwaysFails = () => {
      throw new Error(`i'll always fail`);
    }

    /*
     * Note: the function that throws an exception needs to be
     * invoked within a wrapping function otherwise the toThrow
     * assertion will fail.
     * From: https://jestjs.io/docs/using-matchers#exceptions
     */
    expect(() => alwaysFails()).toThrow();
  });

  
});
