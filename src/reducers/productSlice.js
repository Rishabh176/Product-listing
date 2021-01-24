import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: true
}

const productSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    getProduct(state, action) {
      return { ...state, data: state.data.concat(action.payload.data), loading: false };
    },
    clearData(state, action) {
      return { ...state, data: [] , loading: true };
    },
  }
})

export const { getProduct, clearData } = productSlice.actions

export default productSlice.reducer