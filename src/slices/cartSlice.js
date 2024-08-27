import { createSlice } from "@reduxjs/toolkit";

const initialProducts = [
  {
    name: "Dinosaur cookies",
    category: "food",
    quantity: 1,
    price: 3,
    img: "/imgs/dinosaurus.jpg",
  },
  {
    name: "Lolito",
    category: "books",
    quantity: 1,
    price: 20,
    img: "/imgs/lolito.jpg",
  },
];

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: initialProducts,
  },
  reducers: {
    removeFromCart(state, action) {
      const item = action.payload;
      state.cartItems = state.cartItems.filter(
        (product) => product.name !== item.name
      );
    },
    emptyCart(state) {
      state.cartItems = [];
    },
    incrementQ(state, action) {
      const item = action.payload;
      let productItem = state.cartItems.find(
        (product) => product.name === item.name
      );
      if (productItem) {
        productItem.quantity += 1;
      }
    },
    decrementQ(state, action) {
      const item = action.payload;
      let productItem = state.cartItems.find(
        (product) => product.name === item.name
      );
      if (productItem) {
        productItem.quantity -= 1;
        if (productItem.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (product) => product.name !== item.name
          );
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { removeFromCart, incrementQ, decrementQ, emptyCart } =
  cartSlice.actions;

export default cartSlice.reducer;
