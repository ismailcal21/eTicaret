import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  categories: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.categories = action.payload.categories;
    },
  },
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
