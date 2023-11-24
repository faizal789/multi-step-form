import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formPage1: {
    name: "",
    email: "",
    phone: "",
  },
  formPage2: {
    plan: {
      name: "",
      bill: "",
    },
  },
  formPage3: {
    checkboxes: {
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
    },
  },
  checkboxPlanValue: false,
  errors: {},
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeValue: (state, action) => {
      const { page, field, value } = action.payload;
      state[page][field] = value;
    },
    checkboxTogglePlan: (state) => {
      state.checkboxPlanValue = !state.checkboxPlanValue;
    },
    checkboxToggleAddOns: (state, action) => {
      const checkboxName = action.payload;
      state.formPage3.checkboxes[checkboxName] =
        !state.formPage3.checkboxes[checkboxName];
    },
    setFormErrors: (state, action) => {
      state.errors = action.payload
    },
  },
});

export const { changeValue, checkboxTogglePlan, checkboxToggleAddOns,setFormErrors } =
  formSlice.actions;
export default formSlice.reducer;
