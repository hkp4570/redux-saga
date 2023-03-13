import React from 'react';
import {useDispatch} from "react-redux";

const Race = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <h1>race</h1>
            <h6>可对某个接口进行超时处理</h6>
            <button onClick={() => dispatch({type: 'RACETIMEOUT'})}>race超时处理</button>
        </div>
    );
};

export default Race;
