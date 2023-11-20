import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export type Colors = 'dark' | 'light';

export interface SettingsSlice {
  background: Colors;
}

const initialState: SettingsSlice = {
  background: 'dark',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setBackgroundColor: (state, action: PayloadAction<Colors>) => {
      state.background = action.payload;
    },
  },
});

export const settingsReducer = settingsSlice.reducer;
export const { setBackgroundColor } = settingsSlice.actions;
export const getInitialSettingsValue = (state: RootState) =>
  state.settings.background;
