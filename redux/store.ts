import { configureStore } from '@reduxjs/toolkit'
import { CharactersApi } from '../pages/api/character-api'

export const store = configureStore({
  reducer: {
    [CharactersApi.reducerPath]: CharactersApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([CharactersApi.middleware]),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
