import { combineReducers } from "redux";
import login from "./login/login-reducer";
import counter from "./counter/counterReducer";
import users from "./user/userReducer";

export default combineReducers({
    login, 
    counter,
    users
});
