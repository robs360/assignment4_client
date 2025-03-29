import { configureStore } from '@reduxjs/toolkit'
import authReducer from './featurs/auth/authSlice'
import { baseApi } from './api/baseApi'

import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
const persistConfig={
  key:'auth',
  storage
}
const persistedReducer = persistReducer(persistConfig, authReducer)
export const store = configureStore({
  reducer: {
    auth:persistedReducer,
    [baseApi.reducerPath]:baseApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
})

export let persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch