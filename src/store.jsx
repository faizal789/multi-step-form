import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "./features/step/stepSlice";
import formReducer from "./features/form/formSlice"

export const store = configureStore({
  reducer: {
    step: stepReducer,
    form : formReducer
  },
});
