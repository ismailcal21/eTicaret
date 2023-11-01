import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/myReducer";
import categoriesReducer from "./reducers/myCategories";

const store = configureStore({
  reducer: {
    product: productReducer,
    categories: categoriesReducer,
  },
});

export default store;
