import { RootState } from '../store';
import { useAppSelector } from '../hooks';
import { Character } from 'src/utils/interfaces/character';

export const useCharacterSelector = (): Character =>
  useAppSelector((state: RootState) => {
    return state.character;
  });
