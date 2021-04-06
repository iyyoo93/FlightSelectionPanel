import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Select, Button } from '@material-ui/core';
import {
  decrement,
  increment,
  incrementByAmount,
  selectAirCraftInfo,
  alterCraftInfo,
  alterRotationList,
  selectFlightInfo,
  selectFlightList,
  selectRotationList,
} from '../reducer/airLineInfo.js';
import * as _ from 'lodash';

export function RotationList() {
  const dispatch = useDispatch();
  const airCraftInfo = useSelector(selectAirCraftInfo);
  const flightInfo = useSelector(selectFlightInfo);
  const flightList = useSelector(selectFlightList);
  const rotationList = useSelector(selectRotationList);

  return (
    <div style={{margin: "15px", height: "480px", overflow: "Scroll"}}>
      Rotation List
      {
        rotationList.map(flight =>
          <div>
            <div style={{background: 'white', margin: "7px"}}>
              RouteNO - {flight.ident}<br />
              {flight.origin} - {flight.destination}<br />
              {flight.readable_departure} - {flight.readable_arrival}<br />
            </div>
            <br />
          </div>
        )
      }
    </div>
  );
}
