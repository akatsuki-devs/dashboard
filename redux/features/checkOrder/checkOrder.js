import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  qrCodeDataList: [],
};

export const qrCodeSlice = createSlice({
  name: 'qrCode',
  initialState,
  reducers: {
    addQRCodeData: (state, action) => {
      state.qrCodeDataList.push(action.payload);
    },
  },
});

export const { addQRCodeData } = qrCodeSlice.actions;

export default qrCodeSlice.reducer;
