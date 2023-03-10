import React from 'react';
import {useDispatch} from "react-redux";
import {actionTypes} from "../../app/actionTypes";

const Throttle = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <h1>throttle</h1>
            <h6>节流，连续一段时间内无视触发的任务</h6>
            <button onClick={() => dispatch({type:actionTypes.FETCHDATATHROTTLE, payload:{id:Math.random()}})}>获取数据</button>
        </div>
    );
};

export default Throttle;
