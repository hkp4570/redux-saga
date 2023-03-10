import React from 'react';
import {RootState} from './app/store';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import {actionTypes} from "./app/actionTypes";

function App() {
    const number = useSelector<RootState, {value:number}>(state => state.number);
    const dispatch = useDispatch();

  return (
    <div className="App">
        <h1>{number.value}</h1>
        <button onClick={() => dispatch({type: actionTypes.ADDNUMBER})}>add</button>
        <button onClick={() => dispatch({type: actionTypes.ADDRANDOMNUMBER, payload: {value: Math.random()}})}>add random</button>
    </div>
  );
}

export default App;
