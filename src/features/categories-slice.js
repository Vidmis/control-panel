import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { countryId: 0, cityName: "" },
};

const countrySlice = createSlice({
  name: "countryId",
  initialState,
  reducers: {
    countryId(state, action) {
      state.value.countryId = action.payload;
    },
    cityName(state, action) {
      state.value.cityName = action.payload;
    },
  },
});

export const { countryId, cityName } = countrySlice.actions;
export default countrySlice.reducer;
