import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../../../src/pages/home/Home';
import { CharacterMockResponse } from '../../../__mocks__/characterMock';
import axios, { AxiosError } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  CHARACTER_URL,
  PUBLIC_BASE_URL,
} from '../../../src/utils/constants/urls';
import { fetchFilteredCharacters } from '../../../src/services/characterApi';

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

    mock
      .onGet(PUBLIC_BASE_URL + CHARACTER_URL)
      .reply(200, { results: mockData });

    render(<Home />);

    expect(screen.getByRole('img')).toBeInTheDocument();

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText(/Loading/i)).toBeNull();
      expect(screen.getByText('Rick Sanchez...')).toBeInTheDocument();
      expect(screen.getAllByText(/Alive - Human/)[0]).toBeInTheDocument();
    });
  });

  test('should be throw', async () => {
    const errorMessage = 'Network Error';
    const mockError = new AxiosError(errorMessage);

    jest.spyOn(axios, 'get').mockRejectedValue(mockError);
    await expect(fetchFilteredCharacters()).rejects.toThrow(errorMessage);

    render(<Home />);

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText(/Loading/i)).toBeNull();
    });
  });
});
