import {
  FetchLoginRequest,
  FetchLoginSuccess,
  FetchLoginSuccessPayload,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  FetchLoginFailurePayload,
  FetchLoginFailure,
  LOGIN_FAIL,
} from "./constant";

export const fetchLoginRequest = (): FetchLoginRequest => ({
  type: LOGIN_REQUEST,
});

export const fetchLoginSuccess = (
  payload: FetchLoginSuccessPayload
): FetchLoginSuccess => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const fetchLoginFailure = (
  payload: FetchLoginFailurePayload
): FetchLoginFailure => ({
  type: LOGIN_FAIL,
  payload,
});
