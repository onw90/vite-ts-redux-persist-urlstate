import { configureStore } from '@reduxjs/toolkit';
import { settingsReducer } from './settingsSlice';
import { persistStore } from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createMigrate from 'redux-persist/es/createMigrate';
import { migrations } from './migrations';

const settingsConfig = {
  key: 'settings-color',
  version: 1,
  storage,
  migrate: createMigrate(migrations),
};

const persistedReducer = persistReducer(settingsConfig, settingsReducer);

export const store = configureStore({
  reducer: { settings: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: true,
      },
    }),
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
