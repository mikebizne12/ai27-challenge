import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from 'src/utils/interfaces/character';
import { CharacterPayload } from '../types/character';

const initialState: CharacterPayload = {
  selected: {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: '',
    location: {
      url: '',
      name: '',
    },
    image: '',
    episode: [],
  },
  lastCharacters: [],
};

const characterSlice = createSlice({
  name: 'character',
  initialState: initialState,
  reducers: {
    saveCharacteSelected: (state, { payload }: PayloadAction<Character>) => {
      return { ...state, selected: { ...payload } };
    },

    saveLastCharacterSelected: (
      state,
      { payload }: PayloadAction<Character>
    ) => {
      const data = [...(state.lastCharacters || [])];

      const existingIndex = data.findIndex(
        (existingChar: Character) => existingChar.id === payload.id
      );

      if (existingIndex !== -1) {
        data.splice(existingIndex, 1);
      } else {
        data.push(payload);
      }

      if (
        !data.some((existingChar: Character) => existingChar.id === payload.id)
      ) {
        data.push(payload);
      }

      return {
        ...state,
        lastCharacters: data.reverse().slice(0, 5),
      };
    },
    resetSelected: (state: CharacterPayload) => {
      state.selected = initialState.selected;
    },
    reset: () => {
      return initialState;
    },
  },
});

export const {
  saveCharacteSelected,
  saveLastCharacterSelected,
  reset,
  resetSelected,
} = characterSlice.actions;

export default characterSlice.reducer;
