import MockAdapter from 'axios-mock-adapter';
import axios, { AxiosError } from 'axios';
import {
  CHARACTER_URL,
  PUBLIC_BASE_URL,
} from '../../../src/utils/constants/urls';
import { CharacterMockResponse } from '../../../__mocks__/characterMock';
import { fetchFilteredCharacters } from '../../../src/services/characterApi';

const endPointCharacter = PUBLIC_BASE_URL + CHARACTER_URL;

const mockNetworkResponse = (
  endPoint: string,
  mock: MockAdapter,
  code: number,
  data?: object
) => {
  mock.onGet(endPointCharacter).reply(code, data);
};

describe('Character API', () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  describe('fetch filtered characters', () => {
    test('should be able to fetch the characters', async () => {
      mockNetworkResponse(endPointCharacter, mock, 200, CharacterMockResponse);
      const result: any = await fetchFilteredCharacters();

      expect(result.results[0]).toBeTruthy();
    });

    test('should be throw', async () => {
      const errorMessage = 'Network Error';
      const mockError = new AxiosError(errorMessage);

      jest.spyOn(axios, 'get').mockRejectedValue(mockError);
      await expect(fetchFilteredCharacters()).rejects.toThrow(errorMessage);

      expect(axios.get).toHaveBeenCalledWith(endPointCharacter);
    });
  });
});
