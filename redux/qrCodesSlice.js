import { createSlice } from '@reduxjs/toolkit';

const qrCodesSlice = createSlice({
  name: 'qrCodes',
  initialState: {
    qrCodesData: [],
  },
  reducers: {
    addQRCodeData: (state, action) => {
      state.qrCodesData.push(action.payload);
    },
  },
});

export const { addQRCodeData } = qrCodesSlice.actions;

export default qrCodesSlice.reducer;
