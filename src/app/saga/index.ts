import {delay, call, put, take, all, fork, takeEvery, takeLatest, takeLeading, throttle} from "redux-saga/effects";
import {addNumber, addRandomNumber} from "../../features/sagaNumber/numberSlice";
import {actionTypes} from "../actionTypes";
import {getStudentData} from '../../services/index';
import {setStudentData} from "../../features/studentSlice";


function* add(){
    while(true){
        // @ts-ignore
        yield take(actionTypes.ADDNUMBER);
        yield put(addNumber());
    }
    console.log('saga add');
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

export default function* rootSaga(){
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

