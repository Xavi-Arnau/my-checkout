import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import personalDataSlice from "./slices/personalDataSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
    personalData: personalDataSlice,
  },
});
