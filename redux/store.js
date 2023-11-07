import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/checkOrder/checkOrder'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})