import React from 'react';
import {useDispatch} from "react-redux";
import {actionTypes} from "../../app/actionTypes";

const TakeEvery = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <h1>takeEvery</h1>
            <h6>可同时启动同一个任务，尽管之前的还未结束</h6>
            <button onClick={() => dispatch({type:actionTypes.FETCHDATATAKEEVERY,payload:{id:Math.random()}})}>获取数据</button>
        </div>
    );
};

export default TakeEvery;
