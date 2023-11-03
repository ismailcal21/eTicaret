import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/myReducer";
import categoriesReducer from "./reducers/myCategories";
import cartReducer from "./reducers/cartSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    categories: categoriesReducer,
    cart: cartReducer,
  },
});

export default store;
