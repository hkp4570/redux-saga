import {delay, call, put, take, all, fork, takeEvery, takeLatest, takeLeading, throttle, select} from "redux-saga/effects";
import {addNumber, addRandomNumber} from "../../features/sagaNumber/numberSlice";
import {actionTypes} from "../actionTypes";
import {getStudentData} from '../../services/index';
import {setStudentData} from "../../features/studentSlice";


function* add(){
    for (let i = 0; i < 3; i++) {
        // @ts-ignore
        const action = yield take(actionTypes.ADDNUMBER);
        console.log(action)
    }
    // while(true){
    //     // @ts-ignore
    //     yield take(actionTypes.ADDNUMBER);
    //     yield put(addNumber());
    // }
}

function* asyncAdd(){
    yield delay(200);
}
function* addRandom (){
    while (true){
        try{
            // @ts-ignore
            const action = yield take(actionTypes.ADDRANDOMNUMBER);
            yield put(addRandomNumber(action.payload.value));
        }catch (e){

        }
    }
}

function* fetchData(action:any){
    console.log(action, 'action');
    // @ts-ignore
    const data = yield call(getStudentData, action.payload);
    yield put(setStudentData(data));
}

function* logger(action:any):Generator{
    const state = yield select();

    console.log(action,'action');
    console.log(state, 'after state');
}

function* watchFirstThreeTodosCreation():Generator {
    for (let i = 0; i < 3; i++) {
        const action = yield take('ADDTODO');
        console.log('监听到了TODO添加');
    }
    console.log('3条TODO添加完成');
    yield put({type: 'SHOW_CONGRATULATION'})
}

function* todoCreate():Generator {
    console.log('添加了一条todolist');
}


export default function* rootSaga(){
    /**
     * 监听所有的action
     * 问题：被调佣的任务无法控制何时被调用，无法控制何时停止监听
     */
    yield takeEvery('*', logger);
    yield takeEvery('LISTENADDTODO', watchFirstThreeTodosCreation);
    yield takeEvery('ADDTODO', todoCreate);
    yield takeEvery(actionTypes.FETCHDATATAKEEVERY, fetchData);
    yield takeLatest(actionTypes.FETCHDATATAKELAETEST, fetchData);
    yield takeLeading(actionTypes.FETCHDATATAKELEADING, fetchData);
    yield throttle(1000, actionTypes.FETCHDATATHROTTLE, fetchData);
    yield all([
        fork(add),
        fork(asyncAdd),
        fork(addRandom)
    ])
}

