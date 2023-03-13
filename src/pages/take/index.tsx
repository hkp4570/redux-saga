import React from 'react';
import {useDispatch} from "react-redux";

const TakeEvery = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <h1>take</h1>
            <h6>可以调度其他任务，把相同的逻辑放在一起，类似登录和登出</h6>
            <button onClick={() => dispatch({type: 'LISTENADDTODO'})}>开启监听todolist</button>
            <button onClick={() => dispatch({type: 'ADDTODO'})}>添加一条TODO</button>
        </div>
    );
};

export default TakeEvery;
