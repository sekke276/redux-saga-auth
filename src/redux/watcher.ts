import watcherLogin from "./login/watcher";
import {all} from 'redux-saga/effects'

export default function* rootSaga(){
    
    yield all([
        watcherLogin(),
    ])
}