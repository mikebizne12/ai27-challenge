import { RootState } from '../store';
import { useAppSelector } from '../hooks';
import { CharacterPayload } from '../types/character';

export const useCharacterSelector = (): CharacterPayload =>
  useAppSelector((state: RootState) => {
    return state.character;
  });
