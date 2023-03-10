import React from 'react';
import { useDispatch } from 'react-redux'
import {actionTypes} from "../../app/actionTypes";

const TakeLeading = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <h1>takeLeading</h1>
            <h6>启动一个任务后会阻塞，如果连续多次触发，只会执行第一个任务</h6>
            <button onClick={() => dispatch({type: actionTypes.FETCHDATATAKELEADING, payload:{id:Math.random()}})}>获取数据</button>
        </div>
    );
};

export default TakeLeading;
