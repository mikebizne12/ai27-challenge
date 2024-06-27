import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from 'src/utils/interfaces/character';

const initialState: Character = {
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
};

const characterSlice = createSlice({
  name: 'character',
  initialState: initialState,
  reducers: {
    saveCharacteSelected: (state, { payload }: PayloadAction<Character>) => {
      return { ...state, ...payload };
    },
    reset: () => {
      return initialState;
    },
  },
});

export const { saveCharacteSelected, reset } = characterSlice.actions;

export default characterSlice.reducer;
