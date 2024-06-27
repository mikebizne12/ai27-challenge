import { Config } from '../utils/interfaces/config';
import axios from 'axios';
import { CHARACTER_URL, PUBLIC_BASE_URL } from '../utils/constants/urls';
import { Filter } from 'src/utils/interfaces/filter';

const fetchFilteredCharacters = async (params?: Filter) => {
  try {
    const {
      data: { results, info },
    } = await axios.get<Config>(PUBLIC_BASE_URL + CHARACTER_URL, { params });
    return { results, info };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error de Axios:', error.message);
    }
    throw error;
  }
};

export { fetchFilteredCharacters };
