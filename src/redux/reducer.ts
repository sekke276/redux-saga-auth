import { combineReducers } from "redux";
import loginReducer from "./login/login_reducer";

const reducer = combineReducers({
  loginReducer,
});

export default reducer;
