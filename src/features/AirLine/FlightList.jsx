import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Select, Button } from '@material-ui/core';
import {
  selectAvailableFlights,
  increment,
  incrementByAmount,
  selectAirCraftInfo,
  alterCraftInfo,
  alterFlightList,
  alterRotationList,
  selectFlightInfo,
  selectFlightList,
  selectRotationList,
} from '../reducer/airLineInfo.js';
import * as _ from 'lodash';

export function FlightList() {
  const dispatch = useDispatch();
  const airCraftInfo = useSelector(selectAirCraftInfo);
  const flightInfo = useSelector(selectFlightInfo);
  const flightList = useSelector(selectFlightList);
  const rotationList = useSelector(selectRotationList);
  const availableFlights = useSelector(selectAvailableFlights);
  let finalRotList = null;
  if(rotationList.length > 0) {
    finalRotList = rotationList[rotationList.length - 1];
  }
  return (
    <div style={{margin: "15px", height: "480px", overflow: "Scroll"}}>
      <b>Flight List</b>
      {
        flightList.length === 0 && (
          <div style={{background: 'white', margin: "7px"}}>
            {
              rotationList.length === 0 ?
            <p>No Flight from Base {airCraftInfo.base}, Try changing Base Dropdown from AirCraft column</p>
            : <p>No Flight from {finalRotList.destination} after {finalRotList.readable_arrival}</p>
           }
          </div>
        )
      }
      {
        flightList.map(flight =>
          <div>
            <div style={{background: 'white', margin: "7px"}}><br />
              RouteNO - {flight.ident}<br />
              {flight.origin} - {flight.destination}<br />
              {flight.readable_departure} - {flight.readable_arrival}<br />
              <Button variant="contained" color="primary" onClick={() => {
                const newRL = [ ... rotationList ];
                newRL.push(flight);
                const onStartFlightList = availableFlights.filter(fl =>
                  (
                    fl.origin === flight.destination
                    && (fl.departuretime >= flight.arrivaltime + 1200))
                    && (fl.arrivaltime > fl.departuretime)
                  );
                dispatch(alterFlightList(onStartFlightList));
                dispatch(alterRotationList(newRL));
              }}>
                Add to Rotation
              </Button><br /><br />
            </div>
            <br />
          </div>
        )
      }
    </div>
  );
}
