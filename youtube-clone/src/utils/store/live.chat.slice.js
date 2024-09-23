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
      // Using slice can help remove the need of remove oldest chat action. Very good read about it.
      //state.chatList.splice(10, 1);
      state.chatList.unshift({ name, text });
      state.counter = counter;
    },
    clearChatBox: (state) => {
      state.chatList = [];
    },
    removeOldestChat: (state, { payload }) => {
      state.chatList = payload;
    },
  },
});

export const { addChat, clearChatBox, removeOldestChat } =
  liveChatSlice.actions;

export default liveChatSlice.reducer;
