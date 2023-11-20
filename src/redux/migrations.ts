import { SettingsSlice } from './settingsSlice';

import { MigrationManifest, PersistState } from 'redux-persist/es/types';

export type PersistSliceState = SettingsSlice & { _persist: PersistState };

type PersistSliceStateV0 = Omit<PersistSliceState, 'background'> & {
  backgroundColor: SettingsSlice['background'];
};

export const migrations: MigrationManifest = {
  0: (state): PersistSliceState | undefined => {
    const { ...rest } = state;
    // migration clear out state
    return {
      ...rest,
      background: 'dark',
    };
  },
  1: (state): PersistSliceState | undefined => {
    const { backgroundColor, ...rest } = state as PersistSliceStateV0;
    // migration clear out state
    return {
      ...rest,
      background: backgroundColor,
    };
  },
};
