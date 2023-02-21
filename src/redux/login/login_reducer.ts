import { LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LoginAction, LoginState } from "./constant";
const initalState : LoginState = {
    pending: false,
    user: null,
    error: null,
    token: null,
};

export default (state = initalState, action: LoginAction) => {
  switch (action.type) {
    case LOGIN_REQUEST:{
      return{
        ...state,
        pending: true,
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        pending: false,
        error: null,
        token: action.payload.token,
        user: action.payload.user,
        isLoggedIn: true,
      };
    }
    case LOGIN_FAIL: {
      return{
        ...state,
        pending: false,
        token: null,
        user: null,
        error: action.payload.error
      }
    }
    default:
      return { ...state, };
  }
};
