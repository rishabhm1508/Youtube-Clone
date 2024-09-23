import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app.slice";
import liveChatSlice from "./live.chat.slice";

const appStore = configureStore({
  reducer: {
    appSlice,
    liveChatSlice,
  },
});

export default appStore;
