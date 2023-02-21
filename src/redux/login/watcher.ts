import { fetchLoginSuccess, fetchLoginFailure } from './action';
import axiosClient  from '../../lib/axios';
import {  takeLeading , put, call} from 'redux-saga/effects';
import { LOGIN_REQUEST } from './constant';
import axios, { AxiosError } from 'axios';

export default function* watcherLogin(){
    yield takeLeading(LOGIN_REQUEST, workerLoginRequest);
}

interface Response{
    config?:any,
    data?:any,
    headers?:any,
    request?:any, 
    status?:number,
    statusText?:string
}


function* workerLoginRequest(action: any)
{
    try{ 
        const login = () =>
            axiosClient.post<Response>('/api/login', {
                email: action.payload.userName,
                password: action.payload.password,
            })
        const response : Response = yield call(login)
        yield put(
            fetchLoginSuccess({
                token: response.data.data.token,
                user: response.data.data.user})
        )
        
    }
    catch(err){
        const errors = err as Error | AxiosError;
        if(axios.isAxiosError(errors))
        {
            if(errors.response)
            {
                yield put (fetchLoginFailure({
                    error: errors.response?.data.message
                }))
            }
            else
            {
                yield put(
                    fetchLoginFailure({
                        error: errors.message,
                    }))
            }
        }
    }
}