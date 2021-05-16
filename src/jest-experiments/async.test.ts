describe('asynchronous tests', () => {
  describe('thenable promises', () => {
    const resolvingPromise = Promise.resolve('foo');
    const rejectingPromise = Promise.reject('bar');

    test('promise resolves', () => {
      return resolvingPromise.then(data => {
        expect(data).toBe('foo');
      })
    });

    test('promise rejects', () => {
      expect.assertions(1);
      return rejectingPromise.catch(e => expect(e).toBe('bar'))
    })
  });

  describe('resolves/rejects', () => {
    const resolvingPromise = Promise.resolve('foo');
    const rejectingPromise = Promise.reject('bar');

    test('promise resolves', () => {
      return expect(resolvingPromise).resolves.toBe('foo');
    });

    test('promise rejects', () => {
      return expect(rejectingPromise).rejects.toBe('bar');
    })
  });

  describe('async/await', () => {
    const resolvingPromise = Promise.resolve('foo');
    const rejectingPromise = Promise.reject('bar');

    test('promise resolves', async () => {
      const data = await resolvingPromise;
      expect(data).toBe('foo');
    });

    test('promise rejects', async () => {
      expect.assertions(1);

      try {
        await rejectingPromise;
      } catch (e) {
        expect(e).toBe('bar');
      }
    });
  });

  describe('async/await + resolves/rejects', () => {
    const resolvingPromise = Promise.resolve('foo');
    const rejectingPromise = Promise.reject('bar');

    test('promise resolves', async () => {
      await expect(resolvingPromise).resolves.toBe('foo');
    });

    test('promise rejects', async () => {
      await expect(rejectingPromise).rejects.toBe('bar');
    });
  });
});
