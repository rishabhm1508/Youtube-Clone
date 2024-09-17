import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app.slice";

const appStore = configureStore({
  reducer: {
    appSlice,
  },
});

export default appStore;
