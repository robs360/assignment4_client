import { configureStore } from '@reduxjs/toolkit'
import authReducer from './featurs/auth/authSlice'
import { baseApi } from './api/baseApi'
export const store = configureStore({
  reducer: {
    auth:authReducer,
    [baseApi.reducerPath]:baseApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch