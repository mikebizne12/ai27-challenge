import { Character } from 'src/utils/interfaces/character';

export interface CharacterPayload {
  selected: Character;
  lastCharacters: Character[];
}
