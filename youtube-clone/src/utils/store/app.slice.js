import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "AppSlice",
  initialState: { sidePanelOpen: true },
  reducers: {
    toggleSidePanelAction: (state) => {
      state.sidePanelOpen = !state.sidePanelOpen;
    },
  },
});

export const { toggleSidePanelAction } = appSlice.actions;
export default appSlice.reducer;
