import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "Live Chat Slice",
  initialState: {
    chatList: [],
    counter: 0,
  },
  reducers: {
    addChat: (state, { payload }) => {
      const { name, text, counter } = payload;
      state.chatList.push({ name, text });
      state.counter = counter;
    },
    removeOldestChat: (state, { payload }) => {
      state.chatList = payload;
    },
  },
});

export const { addChat, removeOldestChat } = liveChatSlice.actions;

export default liveChatSlice.reducer;
