import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { airlineInfo } from '../constants/AirLineIntialState';
console.log('airlineInfo----', airlineInfo);
const initialState = { ... airlineInfo };
const onStartFlightList = initialState.availableFlights.filter(fl => fl.origin === initialState.airCraftInfo.base);
initialState.flightList = onStartFlightList;
export const airLineSlice = createSlice({
  name: 'airlineInfo',
  initialState,
  reducers: {
    alterCraftInfo: (state, action) => {
      state.airCraftInfo.base = action.payload.base;
    },
    alterFlightList: (state, action) => {
      state.flightList = action.payload;
    },
    alterRotationList: (state, action) => {
      state.rotationList = action.payload;
    }
  }
});

export const { alterCraftInfo, alterFlightList, alterRotationList } = airLineSlice.actions;

export const selectAirCraftInfo = (state) => state.airlineInfo.airCraftInfo;
export const selectFlightInfo = (state) => state.airlineInfo.availableFlights;
export const selectFlightList = (state) => state.airlineInfo.flightList;
export const selectAvailableFlights = (state) => state.airlineInfo.availableFlights;
export const selectRotationList = (state) => state.airlineInfo.rotationList;

export default airLineSlice.reducer;
