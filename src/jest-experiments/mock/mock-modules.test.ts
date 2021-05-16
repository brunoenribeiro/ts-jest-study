import axios from 'axios';
import { mocked } from 'ts-jest/utils';
import Service from './service';

jest.mock('axios');

const mockedAxios = mocked(axios, true);

describe('mock modules', () => {
  test('mock axios return value', () => {
    mockedAxios.get.mockReturnValueOnce(Promise.resolve({
      data: 'foo'
    }));

    return expect(Service.all()).resolves.toBe('foo');
  })
});