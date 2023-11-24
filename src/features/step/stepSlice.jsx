import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageOne: true,
  pageTwo: false,
  pageThree: false,
  pageFour: false,
};

export const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    nextTwo: (state) => {
      state.pageOne = false;
      state.pageTwo = true;
    },
    nextThree: (state) => {
      state.pageTwo = false;
      state.pageThree = true;
    },
    nextFour: (state) => {
      state.pageThree = false;
      state.pageFour = true;
    },
    prevOne: (state) => {
      state.pageOne = true;
      state.pageTwo = false;
    },
    prevTwo: (state) => {
      state.pageTwo = true;
      state.pageThree = false;
    },
    prevThree: (state) => {
      state.pageThree = true;
      state.pageFour = false;
    },
  },
});

export const { nextTwo, nextThree, nextFour, prevOne, prevTwo, prevThree } =
  stepSlice.actions;

export default stepSlice.reducer;
