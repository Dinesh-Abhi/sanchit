// redux/store.ts
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

export const store = configureStore({
  reducer: rootReducer,
})

// Inferred types for dispatch & state
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
