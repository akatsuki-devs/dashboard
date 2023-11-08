import { configureStore } from '@reduxjs/toolkit';
import qrCodesReducer from './qrCodesSlice';

export const store = configureStore({
  reducer: {
    qrCode: qrCodesReducer,
    // ...outros reducers, se houver
  },
});
