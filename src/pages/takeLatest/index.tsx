import React from 'react';
import {useDispatch} from 'react-redux'
import {actionTypes} from "../../app/actionTypes";

const TakeLatest = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <h1>takeLatest</h1>
            <h6>只允许启动一个任务，如果有多个任务，会取消掉之前的任务</h6>
            <button onClick={() => dispatch({type: actionTypes.FETCHDATATAKELAETEST, payload:{id: Math.random()}})}>获取数据takeLatest</button>
        </div>
    );
};

export default TakeLatest;
