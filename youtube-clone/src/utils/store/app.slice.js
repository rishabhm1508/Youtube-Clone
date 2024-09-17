import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "AppSlice",
  initialState: { sidePanelOpen: true, activeFilter: "All" },
  reducers: {
    toggleSidePanelAction: (state) => {
      state.sidePanelOpen = !state.sidePanelOpen;
    },
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

export const { toggleSidePanelAction, setActiveFilter } = appSlice.actions;
export default appSlice.reducer;
