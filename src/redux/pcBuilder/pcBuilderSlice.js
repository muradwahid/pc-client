const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  products: [],
  totalPrice: 0,
};

const pcBuilderSlice = createSlice({
  name: 'pcBuilder',
  initialState,
  reducers: {
    addToBuilder: (state, action) => {
      state.products.push(action.payload);
      state.totalPrice += action.payload.Price;
    },
    removeToPcBuilder: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
      state.totalPrice -= action.payload.Price;
    },
  },
});

export const { addToBuilder, removeToPcBuilder } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
