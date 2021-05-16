const forEach = <T>(values: T[], callback: (value: T) => T): void => {
  for (let index = 0; index < values.length; index++) {
    callback(values[index]);
  }
}

describe('mocks', () => {
  describe('jest.fn', () => {
    test('test mock properties', () => {
      const mockCallback = jest.fn(x => 42 + x);
      forEach<number>([0,1], mockCallback);

      expect(mockCallback.mock.calls.length).toBe(2);
      expect(mockCallback.mock.calls[0][0]).toBe(0);
      expect(mockCallback.mock.calls[1][0]).toBe(1);
      expect(mockCallback.mock.results[0].value).toBe(42);
      expect(mockCallback.mock.results[1].value).toBe(43);
    });
  });

  describe('class instantiation', () => {
    const MyClass = jest.fn();

    test('count MyClass instances', () => {
      const class1 = new MyClass();
      const class2 = new MyClass();

      expect(MyClass.mock.instances.length).toBe(2);
    });
  });

  describe('mock return values', () => {
    test('return once chaining', () => {
      const mock = jest.fn();
      mock.mockReturnValueOnce(10).mockReturnValueOnce(20);

      expect(mock()).toBe(10);
      expect(mock()).toBe(20);
    })
  });
});
