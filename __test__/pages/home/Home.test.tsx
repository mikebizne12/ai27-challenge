import React, { act } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Home from '../../../src/pages/home/Home';
import { customRender } from '../../../src/utils/common/TestUtils';
import { CharacterMockResponse } from '../../../__mocks__/characterMock';
import axios, { AxiosError } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  CHARACTER_URL,
  PUBLIC_BASE_URL,
} from '../../../src/utils/constants/urls';
import { fetchFilteredCharacters } from '../../../src/services/characterApi';
const endPointCharacter = PUBLIC_BASE_URL + CHARACTER_URL;
describe('Home Component', () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  test('should be fetch the characters', async () => {
    const mockData = CharacterMockResponse.results;

    mock.onGet(endPointCharacter).reply(200, { results: mockData });

    customRender(<Home />, { withRedux: true, mockInitialState: {} });

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText(/Loading/i)).toBeNull();
      expect(screen.getByText('Rick Sanchez...')).toBeInTheDocument();
      expect(screen.getAllByText(/Alive - Human/)[0]).toBeInTheDocument();
    });
  });

  test('should be simulate search input, search button click, and clear button click', async () => {
    customRender(<Home />, { withRedux: true, mockInitialState: {} });

    const searchInput = screen.getByPlaceholderText(
      'Search by name...'
    ) as HTMLInputElement;
    const clearButton = screen.getByRole('button', { name: 'Clear' });

    fireEvent.change(searchInput, { target: { value: 'Rick' } });

    expect(searchInput.value).toBe('Rick');

    fireEvent.click(clearButton);

    await screen.findByPlaceholderText('Search by name...');

    expect(searchInput.value).toBe('');
  });

  test('should be handler submit form', async () => {
    let spy = jest.spyOn(axios, 'get');

    await act(async () => {
      customRender(<Home />, { withRedux: true, mockInitialState: {} });
    });

    const nameInput = screen.getByPlaceholderText(
      'Search by name...'
    ) as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'Rick' } });

    const submitButton = screen.getByRole('button', { name: 'Search' });
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(nameInput.value).toBe('Rick');
      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenNthCalledWith(1, endPointCharacter, {
        params: undefined,
      });
      expect(spy).toHaveBeenNthCalledWith(2, endPointCharacter, {
        params: { name: 'Rick' },
      });
    });
    spy.mockRestore();
  });

  test('should be throw', async () => {
    const errorMessage = 'Network Error';
    const mockError = new AxiosError(errorMessage);

    jest.spyOn(axios, 'get').mockRejectedValue(mockError);
    await expect(fetchFilteredCharacters()).rejects.toThrow(errorMessage);

    customRender(<Home />, { withRedux: true, mockInitialState: {} });

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText(/Loading/i)).toBeNull();
    });
  });
});
