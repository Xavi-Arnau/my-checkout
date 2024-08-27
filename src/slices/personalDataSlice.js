import { createSlice } from "@reduxjs/toolkit";

export const personalDataSlice = createSlice({
  name: "personalData",
  initialState: {
    personalData: {},
  },
  reducers: {
    addData: (state, action) => {
      console.log(action);

      state.personalData = {
        ...state.personalData,
        ...action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addData } = personalDataSlice.actions;

export default personalDataSlice.reducer;
