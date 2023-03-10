import {delay, put, take, all, fork} from "redux-saga/effects";
import {addNumber, addRandomNumber} from "../../features/sagaNumber/numberSlice";
import {actionTypes} from "../actionTypes";


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

export default function* rootSaga(){
    yield all([
        fork(add),
        fork(asyncAdd),
        fork(addRandom)
    ])
}

