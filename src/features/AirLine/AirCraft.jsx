import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Select, MenuItem } from '@material-ui/core';
import {
  selectRotationList,
  alterRotationList,
  alterFlightList,
  selectAirCraftInfo,
  alterCraftInfo,
  selectFlightInfo,
  selectAvailableFlights,
} from '../reducer/airLineInfo.js';
import * as _ from 'lodash';

export function AirCraft() {
  const dispatch = useDispatch();
  const airCraftInfo = useSelector(selectAirCraftInfo);
  const flightInfo = useSelector(selectFlightInfo);
  const availableFlights = useSelector(selectAvailableFlights);
  const rotationList = useSelector(selectRotationList);
  const uniqueFlightbase = _.uniqBy(flightInfo, function (e) {
    return e.origin;
  });
  const baseElement = uniqueFlightbase.find(fs => fs.origin === airCraftInfo)
  if(!baseElement){uniqueFlightbase.push({origin: airCraftInfo.base})}
  let total = 0;
  rotationList.forEach((flight) => {
    total += ( flight.arrivaltime - flight.departuretime);
  });

  return (
    <div style={{margin: "15px"}}>
      Air Crafts
      <div style={{background: 'white', margin: "7px"}}>
        Craft: {airCraftInfo.ident}<br />
        Type: {airCraftInfo.type}<br />
        Seat: {airCraftInfo.economySeats}<br />
        Base:  <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={airCraftInfo.base}
          onChange={(e) => {
            let newAC = { ... airCraftInfo };
            newAC.base = e.target.value;
            const onStartFlightList = availableFlights.filter(fl => fl.origin === newAC.base);
            dispatch(alterCraftInfo(newAC));
            dispatch(alterRotationList([]));
            dispatch(alterFlightList(onStartFlightList));
          }}
        >
        {uniqueFlightbase.map(flight => <MenuItem value={flight.origin}>{flight.origin}</MenuItem>)}
        </Select><br />
        Performance: {parseFloat(total/864).toFixed(2)}%
      </div>
    </div>
  );
}
