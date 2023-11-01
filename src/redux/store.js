import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/myReducer";
const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
