import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { AirCraft } from './features/AirLine/AirCraft';
import { FlightList } from './features/AirLine/FlightList';
import { RotationList } from './features/AirLine/RotationList';
import './App.css';
import TextField from '@material-ui/core/TextField';

function App() {
  const date = new Date();
  return (
    <div className="App">
      <h2>Flight Selection Panel</h2>
      <TextField
       id="date"
       label="Date"
       type="date"
       defaultValue={`${date.getFullYear()}-${("0" + date.getMonth()).slice(-2)}-${("0" + date.getDate()).slice(-2)}`}
       InputLabelProps={{
         shrink: true,
       }}
     /><br /><br />
      <div className="container" style={{width: "100%"}}>
        <div style={{width: "25%", float:"left", height:"500px", border:"double", margin:"20p"}}>
          <AirCraft />
        </div>
        <div style={{width: "35%", float:"left", height:"500px", border:"double", margin:"20p"}}>
          <RotationList />
        </div>
        <div style={{width: "40%", float:"left", height:"500px", border:"double", margin:"20p"}}>
          <FlightList />
        </div>
      </div>
    </div>
  );
}

export default App;
